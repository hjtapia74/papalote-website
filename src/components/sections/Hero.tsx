import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Carousel,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useOffering } from '@/context/OfferingContext'

interface HeroSlide {
  title: string
  subtitle: string
}

const Hero = () => {
  const { t } = useTranslation()
  const { activeOffering, setActiveOffering } = useOffering()
  const slides = t('hero.slides', { returnObjects: true }) as HeroSlide[]

  return (
    <Box
      position="relative"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Fallback gradient for when no media loads */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        zIndex={0}
      />

      {/* Background Video - Multiple formats with mobile fallback */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1}
        display={{ base: 'none', md: 'block' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-mobile-fallback.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          {/* Modern browsers prefer WebM for better compression */}
          <source src="/assets/videos/hero-background.webm" type="video/webm" />
          {/* Fallback to MP4 for broader compatibility */}
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Mobile Background Image (instead of video for performance) */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        backgroundImage="url('/assets/images/hero-mobile-fallback.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex={1}
        display={{ base: 'block', md: 'none' }}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={2}
      />

      {/* Content with Carousel */}
      <Container maxW="6xl" textAlign="center" zIndex={3} position="relative">
        <Carousel.Root
          slideCount={slides.length}
          autoplay={{ delay: 5000 }}
          loop
          page={activeOffering}
          onPageChange={(e) => setActiveOffering(e.page)}
        >
          <Carousel.ItemGroup>
            {slides.map((slide, index) => (
              <Carousel.Item key={index} index={index}>
                <VStack gap={8} color="white" py={4}>
                  <Heading
                    fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    maxW="4xl"
                    mx="auto"
                  >
                    {slide.title}
                  </Heading>

                  <Text
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    maxW="3xl"
                    fontWeight="300"
                    mx="auto"
                  >
                    {slide.subtitle}
                  </Text>

                  <Button
                    size="lg"
                    colorPalette="brand"
                    px={8}
                    py={6}
                    fontSize="lg"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    transition="all 0.3s"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }}
                  >
                    {t('hero.cta')}
                  </Button>
                </VStack>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          {/* Carousel Indicators */}
          <Carousel.Control justifyContent="center" mt={8}>
            <Carousel.Indicators />
          </Carousel.Control>
        </Carousel.Root>
      </Container>
    </Box>
  )
}

export default Hero
