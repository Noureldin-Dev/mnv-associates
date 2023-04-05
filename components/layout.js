import Navbar from './navbar'
import Footer from './footer'
import { Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Flex  height="100vh" flexDir="column">
      <Navbar />
      <main style={{flex:1, background:"yellow", padding:"0px 64px"}}>{children}</main>
      <Footer />
    </Flex>
  )
}