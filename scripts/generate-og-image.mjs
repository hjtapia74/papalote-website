import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const WIDTH = 1200
const HEIGHT = 630

// Brand colors from theme
const BRAND_800 = '#075985'
const BRAND_900 = '#0c4a6e'
const BRAND_300 = '#7dd3fc'

// SVG background with gradient, text, and tagline
const backgroundSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BRAND_900};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BRAND_800};stop-opacity:1" />
    </linearGradient>
    <!-- Subtle geometric accent -->
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${BRAND_300};stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:${BRAND_300};stop-opacity:0" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Decorative diagonal stripe -->
  <polygon points="800,0 ${WIDTH},0 ${WIDTH},${HEIGHT} 600,${HEIGHT}" fill="url(#accent)" />

  <!-- Company name -->
  <text x="80" y="290" font-family="Montserrat, Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="white">
    Papalote Technologies
  </text>

  <!-- Tagline -->
  <text x="80" y="360" font-family="Source Sans Pro, Arial, Helvetica, sans-serif" font-size="30" font-weight="400" fill="${BRAND_300}">
    Data Analytics &amp; AI  |  Cloud Migration  |  Technology Consulting
  </text>

  <!-- Location -->
  <text x="80" y="540" font-family="Source Sans Pro, Arial, Helvetica, sans-serif" font-size="22" font-weight="400" fill="rgba(255,255,255,0.6)">
    Seattle, WA  ·  papalote.ai
  </text>

  <!-- Bottom accent line -->
  <rect x="80" y="570" width="120" height="4" rx="2" fill="${BRAND_300}" />
</svg>
`

async function generate() {
  // Create background from SVG
  const background = sharp(Buffer.from(backgroundSvg))
    .resize(WIDTH, HEIGHT)
    .png()

  // Load and resize the kite logo
  const logo = await sharp(path.join(root, 'public/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png'))
    .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  // Composite logo onto background
  const result = await background
    .composite([
      {
        input: logo,
        top: 60,
        left: 80,
      },
    ])
    .toFile(path.join(root, 'public/assets/images/og-image.png'))

  console.log(`OG image generated: ${result.width}x${result.height} (${result.size} bytes)`)
}

generate().catch(console.error)
