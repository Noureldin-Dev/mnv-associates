import { Flex } from '@chakra-ui/react'
import React from 'react'
import ArticleCarousel from "../components/ArticlesCarousel"

function Blog() {
  return (
<Flex flexDir="column">
<ArticleCarousel/>

</Flex>
  )
}

export default Blog