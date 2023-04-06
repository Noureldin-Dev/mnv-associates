import React from 'react'
import Logo from "../public/logo.png"
import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Facebook from "../public/Facebook.svg"
import Instagram from "../public/Instagram.svg"
import Linkedin from "../public/Linkedin.svg"
import BookConsulation from './BookConsulation'
import ArticlesCarousel from "./ArticlesCarousel"
import CrossSell from "./CrossSell"
function Footer() {
  return (
    <Flex padding="64px 64px" gap="0" flexDir="column">

      <BookConsulation/>

<CrossSell/>

<ArticlesCarousel/>
<Flex id='Footer' flexWrap="wrap" gap="72px"  height={307} alignItems="center" justifyContent="space-between" >

    <Flex className='FooterChild'  gap={6} alignItems="center" justifyContent="center" flexDir="column">
    <Image src={Logo} width={100} height={100} />

        <Flex gap={3} alignItems="center" justifyContent="center">
        <Image src={Facebook} width={35} height={35} />
        <Image src={Instagram} width={35} height={35} />
        <Image src={Linkedin} width={35} height={35} />

        </Flex>
    </Flex>

    <Flex className='FooterChild' gap="56px" flexDir="column">
    <Button variant="link">About Us</Button>
    <Button variant="link">Services</Button>
    <Button variant="link">Blog</Button>
    </Flex>


    <Flex className='FooterChild' gap="56px" flexDir="column">
      <Button className='GradientButton'
      color="white"
height="57px"
      variant="link" >Contact Us</Button>
      <Flex gap="24px" flexDir="column">
      <Text fontWeight="bold">+971522860547</Text>
      <Text fontWeight="bold">info@mnvassociates.com</Text>
      </Flex>
    </Flex>

<Flex  height="50%" justifyContent={["flex-start","flex-start","flex-start","center"]} className='FooterChild' flexDir="column">
<Text className='Heading5'>Stop wasting time.</Text>
<Text className='Heading5'>Let the experts handle your Accounting.</Text>
    
    </Flex>
</Flex>
</Flex>
  )
}

export default Footer