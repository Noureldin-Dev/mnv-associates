import { Button, Container, Divider, Flex, Text } from '@chakra-ui/react'
import BookConsulation from 'home/components/BookConsulation'
import ServicesSection from 'home/components/ServicesSection'
import Testimonial from 'home/components/Testimonial'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CrossSell from "../components/CrossSell"
import { ArrowDown } from 'react-bootstrap-icons'
import Splash from "../public/Splash.svg"
import ArticlesCarousel from "../components/ArticlesCarousel"

function Index() {
  return (
    <Flex gap="80px" flexDir="column">
      <Flex rowGap="40px" flexWrap="wrap-reverse">
    <Flex gap="40px" flexDir="column">
      <Flex flexDir="column" gap="8px">
<Text fontSize={["2xl","2xl","3xl"]}>The Best</Text>
<Text className='GradientText' fontWeight="bold" fontSize={["3xl","4xl","4xl","5xl"]}>Accounting & Bookkeeping Firm</Text>
<Text fontSize={["2xl","2xl","3xl"]}>in Dubai</Text>
</Flex>
<Text maxW={["100%","100%","100%","50%"]}>
  Our experienced team of financial professionals is dedicated to providing tailored solutions that exceed your expectations.
  </Text>


<Button color="white" variant="link" width="fit-content" padding="16px 32px" className='GradientButton'>
  <Flex alignItems="center" justifyContent="center" gap="16px">
    <Text color="white">Get a FREE Consultation</Text>
<ArrowDown color="white" size={25}/>
  </Flex>
</Button>
    </Flex>

    <Image src={Splash} id='SplashImage'/>

    </Flex>
    
<Divider/>
<ServicesSection/>



<Testimonial/>


    
    </Flex>
  )
}

export default Index