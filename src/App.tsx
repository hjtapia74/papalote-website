import { Box } from '@chakra-ui/react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import LocationVideo from './components/sections/LocationVideo'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <LocationVideo />
      <CTA />
      <Contact />
    </Box>
  )
}

export default App
