import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  Image,
  Link,
  HStack,
  Badge,
  Button,
  Skeleton,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LuExternalLink } from 'react-icons/lu'
import { useColorModeValue } from '@/components/ui/color-mode'
import { useMediumPosts } from '@/hooks/useMediumPosts'

const MEDIUM_PROFILE = 'https://medium.com/@hjtapia74_86693'

const Blog = () => {
  const { t } = useTranslation()
  const { posts, loading, error } = useMediumPosts(3)

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const dateColor = useColorModeValue('gray.500', 'gray.400')

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Box id="blog" py={20} bg={bgColor}>
      <Container maxW="6xl">
        <VStack gap={16}>
          {/* Section Header */}
          <VStack gap={4} textAlign="center" maxW="3xl">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color={headingColor}
              fontWeight="bold"
            >
              {t('blog.title')}
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor}>
              {t('blog.subtitle')}
            </Text>
          </VStack>

          {/* Error State */}
          {error && (
            <Text color={textColor} textAlign="center">
              {t('blog.errorMessage')}
            </Text>
          )}

          {/* Loading Skeletons */}
          {loading && !error && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="100%">
              {[0, 1, 2].map((i) => (
                <Card.Root key={i} bg={cardBg} border="1px" borderColor={borderColor} overflow="hidden">
                  <Skeleton height="200px" />
                  <Card.Body p={6}>
                    <VStack gap={3} align="start">
                      <Skeleton height="4" width="30%" />
                      <Skeleton height="6" width="100%" />
                      <Skeleton height="4" width="100%" />
                      <Skeleton height="4" width="80%" />
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          )}

          {/* Post Cards */}
          {!loading && !error && posts.length > 0 && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="100%">
              {posts.map((post) => (
                <Link
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Card.Root
                    h="100%"
                    bg={cardBg}
                    border="1px"
                    borderColor={borderColor}
                    overflow="hidden"
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: 'xl',
                    }}
                    transition="all 0.3s"
                  >
                    {post.thumbnail && (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        height="200px"
                        objectFit="cover"
                        w="100%"
                      />
                    )}
                    <Card.Body p={6}>
                      <VStack gap={3} align="start" h="100%">
                        <Text fontSize="sm" color={dateColor}>
                          {formatDate(post.pubDate)}
                        </Text>
                        <Heading
                          fontSize="lg"
                          color={headingColor}
                          fontWeight="bold"
                          lineHeight="short"
                        >
                          {post.title}
                        </Heading>
                        <Text
                          color={textColor}
                          fontSize="sm"
                          lineHeight="tall"
                          flex="1"
                        >
                          {post.description}...
                        </Text>
                        {post.categories.length > 0 && (
                          <HStack gap={2} flexWrap="wrap">
                            {post.categories.slice(0, 3).map((cat) => (
                              <Badge
                                key={cat}
                                colorPalette="blue"
                                variant="subtle"
                                fontSize="xs"
                              >
                                {cat}
                              </Badge>
                            ))}
                          </HStack>
                        )}
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                </Link>
              ))}
            </SimpleGrid>
          )}

          {/* View All Button */}
          {!loading && !error && (
            <Link
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                variant="outline"
                colorPalette="blue"
                size="lg"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                }}
                transition="all 0.3s"
              >
                {t('blog.viewAll')}
                <LuExternalLink />
              </Button>
            </Link>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

export default Blog
