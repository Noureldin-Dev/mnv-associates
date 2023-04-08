import { Flex } from '@chakra-ui/react'
import React from 'react'
import ArticleCarousel from "../components/ArticlesCarousel"
import Head from 'next/head'

function Blog() {
  return (
    <>
        <Head>
    <title>Blog</title>
    <meta name="description" content="MNV Associates - The Best Accounting Firm In Dubai" />
  </Head>
  
<Flex flexDir="column">
<ArticleCarousel isBlogPage/>

</Flex>
</>
  )
}

export default Blog