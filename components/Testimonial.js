import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Company from '../public/TestimonialImage.jpeg'
import Image from 'next/image'

function Testimonial() {
  return (
<Flex gap="64px" alignItems="center" flexDir="column">
<Text alignSelf="flex-start" fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Customer Testimonial:</Text>
<Flex gap="16px" alignItems="center" flexDir="column">
    <Text fontSize={["2xl","2xl","2xl","3xl"]} textAlign="center" className='GradientText'>"Excellent training on account VAT returns."</Text>
    <Text textAlign="center">Leon Tatti</Text>
    <Text fontSize="sm" fontWeight="bold" textAlign="center">Premium Ideas Middle East FZE</Text>
    <Image src={Company} 
    height={50}
    width={50}/>
    </Flex>
</Flex>
  )
}

export default Testimonial