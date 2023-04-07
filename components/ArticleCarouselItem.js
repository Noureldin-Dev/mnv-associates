import { Flex, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ServiceCarouselItem({Title, Destination}) {
  const router = useRouter()
  return (
<Flex background="#EC4B36" gap="64px" alignItems="center" justifyContent="center" className='ServiceCarouselItem'>
    <Text  textAlign="center" color="white" fontSize={["2xl","2xl","2xl","3xl"]}>{Title}</Text>
    <Flex onClick={()=>router.push(Destination)} color="white" borderColor="white" alignSelf="center" className='OutlinedButton'>
    <Link  href={Destination}>Learn more</Link>
</Flex>

</Flex>
  )
}

export default ServiceCarouselItem