import { Box } from '@chakra-ui/react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import LocationVideo from './components/sections/LocationVideo'
import CTA from './components/sections/CTA'
import Blog from './components/sections/Blog'
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
      <Blog />
      <Contact />
    </Box>
  )
}

export default App
