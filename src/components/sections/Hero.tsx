import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <Box
      position="relative"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Background Video - Multiple formats with mobile fallback */}
      <Box
        as="video"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/hero-mobile-fallback.png"
        zIndex={-2}
        display={{ base: 'none', md: 'block' }}
        sx={{
          '&::-webkit-media-controls': {
            display: 'none !important',
          },
        }}
      >
        {/* Modern browsers prefer WebM for better compression */}
        <source src="/assets/videos/hero-background.webm" type="video/webm" />
        {/* Fallback to MP4 for broader compatibility */}
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
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
        zIndex={-2}
        display={{ base: 'block', md: 'none' }}
      />

      {/* Fallback gradient for when no media loads */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        zIndex={-3}
      />
      
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={-1}
      />

      {/* Content */}
      <Container maxW="6xl" textAlign="center">
        <VStack spacing={8} color="white">
          <Heading
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            lineHeight="1.2"
            maxW="4xl"
          >
            {t('hero.title')}
          </Heading>
          
          <Text
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            maxW="3xl"
            fontWeight="300"
          >
            {t('hero.subtitle')}
          </Text>

          <Button
            size="lg"
            colorScheme="brand"
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
      </Container>
    </Box>
  )
}

export default Hero