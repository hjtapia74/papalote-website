import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  const services = [
    {
      titleKey: 'services.analytics.title',
      descriptionKey: 'services.analytics.description',
      icon: '/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png',
    },
    {
      titleKey: 'services.architecture.title',
      descriptionKey: 'services.architecture.description',
      icon: '/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png',
    },
    {
      titleKey: 'services.cloud.title',
      descriptionKey: 'services.cloud.description',
      icon: '/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png',
    },
    {
      titleKey: 'services.consulting.title',
      descriptionKey: 'services.consulting.description',
      icon: '/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png',
    },
    {
      titleKey: 'services.database.title',
      descriptionKey: 'services.database.description',
      icon: '/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png',
    },
    {
      titleKey: 'services.managed.title',
      descriptionKey: 'services.managed.description',
      icon: '/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png',
    },
  ]

  return (
    <Box id="services" py={20} bg="white">
      <Container maxW="6xl">
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={6} textAlign="center" maxW="4xl">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="gray.800"
              fontWeight="bold"
            >
              {t('services.title')}
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              lineHeight="tall"
            >
              {t('services.description')}
            </Text>
          </VStack>

          {/* Services Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            w="100%"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                h="100%"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
                border="1px"
                borderColor="gray.200"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start" h="100%">
                    <Image
                      src={service.icon}
                      alt={t(service.titleKey)}
                      w="60px"
                      h="60px"
                      objectFit="contain"
                    />
                    
                    <Heading
                      fontSize="xl"
                      color="gray.800"
                      fontWeight="bold"
                    >
                      {t(service.titleKey)}
                    </Heading>
                    
                    <Text
                      color="gray.600"
                      lineHeight="tall"
                      flex="1"
                    >
                      {t(service.descriptionKey)}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Services