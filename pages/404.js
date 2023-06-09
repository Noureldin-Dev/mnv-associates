import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function notfound() {
  const router = useRouter()
  return (
    <>
            <Head>
    <title>404 Error</title>
    <meta name="description" content="MNV Associates - The Best Accounting Firm In Dubai" />
  </Head>
  
    <Flex gap="24px" alignItems="center" justifyContent="center" flexDir="column">
    <Text fontSize="3xl">404 - Page Not Found</Text>
    <Text>Sorry, there is nothing to see here</Text>

    <Flex gap="24px" >
      
    <Flex alignItems="center" justifyContent="center" onClick={()=>router.push("/")} className='OutlinedButton' >
      <Link  href='/' >
        Home
      </Link>
      </Flex>
      <Flex alignItems="center" justifyContent="center"  onClick={()=>router.push("/contact")} className='OutlinedButton' >
      <Link  href='/contact' >
        Contact Us
      </Link>
      </Flex>
    </Flex>
  </Flex>
  </>
  )
}

export default notfound