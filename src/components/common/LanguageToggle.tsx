import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        color="white"
        size="sm"
        _hover={{ bg: 'whiteAlpha.200' }}
        _active={{ bg: 'whiteAlpha.300' }}
      >
        <HStack spacing={2}>
          <Text fontSize="sm">🌐</Text>
          <Text fontSize="sm" fontWeight="medium">
            {getCurrentLanguageLabel()}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList bg="white" borderColor="gray.200">
        <MenuItem
          onClick={() => changeLanguage('en')}
          bg={i18n.language === 'en' ? 'brand.50' : 'white'}
          _hover={{ bg: 'brand.50' }}
        >
          <HStack spacing={3}>
            <Text>🇺🇸</Text>
            <Text color="gray.800">{t('language.english')}</Text>
          </HStack>
        </MenuItem>
        <MenuItem
          onClick={() => changeLanguage('es')}
          bg={i18n.language === 'es' ? 'brand.50' : 'white'}
          _hover={{ bg: 'brand.50' }}
        >
          <HStack spacing={3}>
            <Text>🇪🇸</Text>
            <Text color="gray.800">{t('language.spanish')}</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default LanguageToggle