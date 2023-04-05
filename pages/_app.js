// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import "../styles.css"

import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </ChakraProvider>
  )
}