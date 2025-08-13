import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const LocationVideo = () => {
  const { t } = useTranslation()
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="gray.800"
              fontWeight="bold"
            >
              {t('location.title')}
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="2xl"
            >
              {t('location.description')}
            </Text>
          </VStack>

          {/* Video Container - Seattle location video */}
          <Box w="100%" maxW="500px">
            <AspectRatio ratio={1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              >
                <source src="/assets/videos/seattle-placeholder.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <Box
                  bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="xl"
                  fontWeight="bold"
                  textAlign="center"
                  p={8}
                  w="100%"
                  h="100%"
                >
                  <VStack spacing={4}>
                    <Text fontSize="2xl">🏔️ {t('location.city')}</Text>
                    <Text fontSize="lg" opacity={0.9}>
                      {t('location.videoPlaceholder')}
                    </Text>
                  </VStack>
                </Box>
              </video>
            </AspectRatio>
          </Box>

          {/* Location Info */}
          <VStack spacing={4} textAlign="center">
            <Text fontSize="lg" color="gray.700" fontWeight="medium">
              {t('location.city')}
            </Text>
            <Text color="gray.600">
              {t('location.serving')}
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default LocationVideo