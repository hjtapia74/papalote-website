import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { LuExternalLink } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <Box id="contact" py={20} bg="gray.800" color="white">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
          {/* Contact Information */}
          <VStack gap={8} align="start">
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
            >
              {t('contact.title')}
            </Heading>

            <VStack gap={6} align="start" fontSize="lg">
              <VStack gap={2} align="start">
                <Text fontWeight="bold" color="brand.300">
                  {t('contact.address')}
                </Text>
                <Text>
                  Seattle, WA, USA
                </Text>
              </VStack>

              <VStack gap={2} align="start">
                <Text fontWeight="bold" color="brand.300">
                  {t('contact.phone')}
                </Text>
                <Link href="tel:+16505500701" _hover={{ color: 'brand.300' }}>
                  +1 (650) 550-0701
                </Link>
              </VStack>

              <VStack gap={2} align="start">
                <Text fontWeight="bold" color="brand.300">
                  {t('contact.email')}
                </Text>
                <Link href="mailto:info@papalote.ai" _hover={{ color: 'brand.300' }}>
                  info@papalote.ai
                </Link>
              </VStack>

              <VStack gap={2} align="start">
                <Text fontWeight="bold" color="brand.300">
                  {t('contact.followUs')}
                </Text>
                <HStack gap={4}>
                  <Link
                    href="https://www.linkedin.com/company/papalote-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ color: 'brand.300' }}
                  >
                    LinkedIn <Icon as={LuExternalLink} mx={1} />
                  </Link>
                  <Link
                    href="http://www.twitter.com/hjtapia74"
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ color: 'brand.300' }}
                  >
                    Twitter <Icon as={LuExternalLink} mx={1} />
                  </Link>
                </HStack>
              </VStack>
            </VStack>
          </VStack>

          {/* Company Info */}
          <VStack gap={6} align="start">
            <Heading
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
            >
              {t('contact.about')}
            </Heading>
            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              {t('contact.description1')}
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              {t('contact.description2')}
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Contact
