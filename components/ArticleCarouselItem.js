import { Flex, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ServiceCarouselItem({Title, Destination}) {
  const router = useRouter()
  return (
<Flex background="#EC4B36"  className='ServiceCarouselItem'>
  <Flex alignSelf="flex-start" flexDir="column" gap="8px">
    <Text fontWeight="bold"  textAlign="left" color="white" fontSize={"2xl"}>{Title}</Text>
    <Text color="#FEFEFE">The United Arab Emirates (UAE) has long been known for its business-friendly environment and tax-free policies.</Text>
    </Flex>
    <Flex style={{alignSelf:"flex-end"}}  onClick={()=>router.push(Destination)} color="white" borderColor="white" alignSelf="center" className='OutlinedButton'>
    <Link  href={Destination}>Learn more</Link>
</Flex>

</Flex>
  )
}

export default ServiceCarouselItem