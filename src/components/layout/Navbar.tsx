import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../common/LanguageToggle'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        py={4}
        justify="space-between"
        align="center"
      >
        <Link href="/">
          <Image
            src="/assets/images/668c04b0c38f5e66d96ce7cf_logo_small_white.png"
            alt="Papalote Technologies"
            h="40px"
          />
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Flex gap={6}>
            <Link
              href="#services"
              color="white"
              _hover={{ color: 'brand.300' }}
              fontWeight="medium"
            >
              {t('nav.services')}
            </Link>
            <Link
              href="#experience"
              color="white"
              _hover={{ color: 'brand.300' }}
              fontWeight="medium"
            >
              {t('nav.experience')}
            </Link>
            <Link
              href="#contact"
              color="white"
              _hover={{ color: 'brand.300' }}
              fontWeight="medium"
            >
              {t('nav.contact')}
            </Link>
          </Flex>
          <LanguageToggle />
        </HStack>

        {/* Mobile Navigation */}
        <HStack spacing={3} display={{ base: 'flex', md: 'none' }}>
          <LanguageToggle />
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            onClick={onOpen}
          />
        </HStack>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{t('nav.services')}</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                <Link href="#services" onClick={onClose}>
                  {t('nav.services')}
                </Link>
                <Link href="#experience" onClick={onClose}>
                  {t('nav.experience')}
                </Link>
                <Link href="#contact" onClick={onClose}>
                  {t('nav.contact')}
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Navbar