import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation()
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <Box py={20} bg="brand.600" color="white">
      <Container maxW="4xl" textAlign="center">
        <VStack gap={8}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            {t('cta.title')}
          </Heading>
          
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            opacity={0.9}
            maxW="3xl"
          >
            {t('cta.description')}
          </Text>

          <Button
            size="lg"
            bg="white"
            color="brand.600"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'xl',
              bg: 'gray.100',
            }}
            transition="all 0.3s"
            onClick={handleContactClick}
          >
            {t('cta.button')}
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default CTA