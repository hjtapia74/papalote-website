import {
  Menu,
  Button,
  Text,
  HStack,
  Portal,
} from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'

const LanguageToggle = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const getCurrentLanguageLabel = () => {
    return i18n.language === 'es' ? 'ES' : 'EN'
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          color="white"
          size="sm"
          _hover={{ bg: 'whiteAlpha.200' }}
          _active={{ bg: 'whiteAlpha.300' }}
        >
          <HStack gap={2}>
            <Text fontSize="sm">🌐</Text>
            <Text fontSize="sm" fontWeight="medium">
              {getCurrentLanguageLabel()}
            </Text>
          </HStack>
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bg="white" borderColor="gray.200">
            <Menu.Item
              value="en"
              onClick={() => changeLanguage('en')}
              bg={i18n.language === 'en' ? 'brand.50' : 'white'}
              _hover={{ bg: 'brand.50' }}
            >
              <HStack gap={3}>
                <Text>🇺🇸</Text>
                <Text color="gray.800">{t('language.english')}</Text>
              </HStack>
            </Menu.Item>
            <Menu.Item
              value="es"
              onClick={() => changeLanguage('es')}
              bg={i18n.language === 'es' ? 'brand.50' : 'white'}
              _hover={{ bg: 'brand.50' }}
            >
              <HStack gap={3}>
                <Text>🇪🇸</Text>
                <Text color="gray.800">{t('language.spanish')}</Text>
              </HStack>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default LanguageToggle
