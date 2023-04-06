import { Flex, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import React from 'react'

function ServiceCarouselItem({Title, Destination}) {
  return (
<Flex gap="64px" alignItems="center" justifyContent="center" className='ServiceCarouselItem'>
    <Text  textAlign="center" color="white" fontSize={["2xl","2xl","2xl","3xl"]}>{Title}</Text>
    <Flex color="white" borderColor="white" alignSelf="center" className='OutlinedButton'>
    <Link  href={Destination}>Learn more</Link>
</Flex>

</Flex>
  )
}

export default ServiceCarouselItem