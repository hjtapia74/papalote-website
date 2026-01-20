import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()
  const technologies = [
    {
      name: 'AWS',
      image: '/assets/images/668c431e909fc46e4452c668_aws.png',
    },
    {
      name: 'Snowflake',
      image: '/assets/images/668c43f916c3a0249b1ee0e5_snowflake_logo_icon_249589.png',
    },
    {
      name: 'SingleStore',
      image: '/assets/images/668c468edcc5e9e480b486d2_SingleStore_logo.png',
    },
    {
      name: 'Technology',
      image: '/assets/images/668c48b58b32c44ea59f05ea_Artboard 20.png',
    },
    {
      name: 'Kafka',
      image: '/assets/images/668c4969c7ac4c5ac2c5b244_Kafka_logo.png',
    },
    {
      name: 'TIBCO',
      image: '/assets/images/668c4a651c8b179b7077354b_TIBCO_logo.png',
    },
  ]

  return (
    <Box id="experience" py={20} bg="gray.50">
      <Container maxW="6xl">
        <VStack gap={12}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign="center"
            color="gray.800"
            fontWeight="bold"
            letterSpacing="wide"
          >
            {t('experience.title')}
          </Heading>

          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 6 }}
            gap={8}
            w="100%"
          >
            {technologies.map((tech, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="120px"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.3s"
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  maxH="60px"
                  maxW="100px"
                  objectFit="contain"
                />
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Experience