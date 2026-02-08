import {
  Box,
  Flex,
  Image,
  Link,
  IconButton,
  Drawer,
  VStack,
  HStack,
  Portal,
  CloseButton,
} from '@chakra-ui/react'
import { LuMenu } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LanguageToggle from '../common/LanguageToggle'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Box
      as="nav"
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
        <HStack gap={6} display={{ base: 'none', md: 'flex' }}>
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
              href="#blog"
              color="white"
              _hover={{ color: 'brand.300' }}
              fontWeight="medium"
            >
              {t('nav.blog')}
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
        <HStack gap={3} display={{ base: 'flex', md: 'none' }}>
          <LanguageToggle />
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            color="white"
            onClick={() => setOpen(true)}
          >
            <LuMenu />
          </IconButton>
        </HStack>

        {/* Mobile Drawer */}
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="end">
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>{t('nav.services')}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <VStack gap={4} align="start">
                    <Link href="#services" onClick={() => setOpen(false)}>
                      {t('nav.services')}
                    </Link>
                    <Link href="#experience" onClick={() => setOpen(false)}>
                      {t('nav.experience')}
                    </Link>
                    <Link href="#blog" onClick={() => setOpen(false)}>
                      {t('nav.blog')}
                    </Link>
                    <Link href="#contact" onClick={() => setOpen(false)}>
                      {t('nav.contact')}
                    </Link>
                  </VStack>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </Box>
  )
}

export default Navbar
