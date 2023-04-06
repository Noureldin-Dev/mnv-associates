import Navbar from './navbar'
import Footer from './footer'
import { Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Flex  height="100vh" flexDir="column">
      <Navbar />
      <main id='MAIN' style={{flex:1, marginTop:"40px"}}>{children}</main>
      <Footer />
    </Flex>
  )
}