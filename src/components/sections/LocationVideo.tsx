import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useColorModeValue } from '@/components/ui/color-mode'

const LocationVideo = () => {
  const { t } = useTranslation()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const cityColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="6xl">
        <VStack gap={12}>
          <VStack gap={6} textAlign="center">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color={headingColor}
              fontWeight="bold"
            >
              {t('location.title')}
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
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
                  <VStack gap={4}>
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
          <VStack gap={4} textAlign="center">
            <Text fontSize="lg" color={cityColor} fontWeight="medium">
              {t('location.city')}
            </Text>
            <Text color={textColor}>
              {t('location.serving')}
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default LocationVideo