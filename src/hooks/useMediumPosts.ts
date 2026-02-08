import { useState, useEffect } from 'react'

export interface MediumPost {
  title: string
  pubDate: string
  link: string
  thumbnail: string
  description: string
  categories: string[]
}

interface CachedData {
  posts: MediumPost[]
  timestamp: number
}

const CACHE_KEY = 'medium_posts_cache'
const CACHE_TTL = 30 * 60 * 1000 // 30 minutes
const FEED_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hjtapia74_86693'

function getCachedPosts(): MediumPost[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const cached: CachedData = JSON.parse(raw)
    if (Date.now() - cached.timestamp > CACHE_TTL) {
      localStorage.removeItem(CACHE_KEY)
      return null
    }
    return cached.posts
  } catch {
    localStorage.removeItem(CACHE_KEY)
    return null
  }
}

function cachePosts(posts: MediumPost[]) {
  const data: CachedData = { posts, timestamp: Date.now() }
  localStorage.setItem(CACHE_KEY, JSON.stringify(data))
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

export function useMediumPosts(count = 3) {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cached = getCachedPosts()
    if (cached) {
      setPosts(cached.slice(0, count))
      setLoading(false)
      return
    }

    const controller = new AbortController()

    fetch(FEED_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (data.status !== 'ok') throw new Error('Feed unavailable')
        const items: MediumPost[] = data.items.map(
          (item: Record<string, unknown>) => ({
            title: item.title as string,
            pubDate: item.pubDate as string,
            link: item.link as string,
            thumbnail: (item.thumbnail as string) || '',
            description: stripHtml(item.description as string).slice(0, 200),
            categories: (item.categories as string[]) || [],
          })
        )
        cachePosts(items)
        setPosts(items.slice(0, count))
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [count])

  return { posts, loading, error }
}
