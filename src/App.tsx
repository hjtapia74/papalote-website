import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import LocationVideo from './components/sections/LocationVideo'
import CTA from './components/sections/CTA'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('es') ? 'es' : 'en'
  }, [i18n.language])

  return (
    <Box>
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <LocationVideo />
      <CTA />
      <Blog />
      <Contact />
    </Box>
  )
}

export default App
