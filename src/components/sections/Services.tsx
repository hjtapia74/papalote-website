import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Card,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useOffering } from '@/context/OfferingContext'
import { useColorModeValue } from '@/components/ui/color-mode'

interface ServiceItem {
  title: string
  description: string
}

interface ServiceOffering {
  title: string
  description: string
  items: ServiceItem[]
}

const Services = () => {
  const { t } = useTranslation()
  const { activeOffering } = useOffering()

  const offerings = t('services.offerings', { returnObjects: true }) as ServiceOffering[]
  const currentOffering = offerings[activeOffering] || offerings[0]

  const bgColor = useColorModeValue('white', 'gray.900')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box id="services" py={20} bg={bgColor}>
      <Container maxW="6xl">
        <VStack gap={16}>
          {/* Section Header */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color={headingColor}
              fontWeight="bold"
            >
              {currentOffering.title}
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              lineHeight="tall"
            >
              {currentOffering.description}
            </Text>
          </VStack>

          {/* Services Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={8}
            w="100%"
          >
            {currentOffering.items.map((service, index) => (
              <Card.Root
                key={`${activeOffering}-${index}`}
                h="100%"
                bg={cardBg}
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
                border="1px"
                borderColor={borderColor}
              >
                <Card.Body p={8}>
                  <VStack gap={6} align="start" h="100%">
                    <Image
                      src="/assets/images/668c68c09575a99347fd1475_Logo Solo Papalote.png"
                      alt={service.title}
                      w="60px"
                      h="60px"
                      objectFit="contain"
                    />

                    <Heading
                      fontSize="xl"
                      color={headingColor}
                      fontWeight="bold"
                    >
                      {service.title}
                    </Heading>

                    <Text
                      color={textColor}
                      lineHeight="tall"
                      flex="1"
                    >
                      {service.description}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Services
