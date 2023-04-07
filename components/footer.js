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
import { useRouter } from 'next/router'
function Footer() {
  const router = useRouter()
  return (
    <Flex padding={["64px 32px","64px 32px","64px 64px","64px 64px"]} gap="0" flexDir="column">

      <BookConsulation/>

<CrossSell/>

<ArticlesCarousel/>
<Flex paddingTop="32px" id='Footer' flexWrap="wrap" gap="72px"  height={307} alignItems="center" justifyContent="space-between" >

    <Flex className='FooterChild'  gap={6} alignItems="center" justifyContent="center" flexDir="column">
    <Image src={Logo} width={100} height={100} />

        <Flex gap={3} alignItems="center" justifyContent="center">
        <Image onClick={()=>{window.open("https://www.instagram.com/mnvassociates/", '_blank');}} style={{cursor:"pointer"}} src= {Instagram} width={35} height={35}/>
<Image onClick={()=>{window.open("https://www.facebook.com/mnvassociates/", '_blank');}}  style={{cursor:"pointer"}} src= {Facebook} width={35} height={35}/>
<Image onClick={()=>{window.open("https://ae.linkedin.com/company/mnv-associates", '_blank');}}   style={{cursor:"pointer"}} src= {Linkedin} width={35} height={35}/>


        </Flex>
    </Flex>

    <Flex className='FooterChild' gap="56px" flexDir="column">
    <Button variant="link">About Us</Button>
    <Button variant="link">Services</Button>
    <Button variant="link">Blog</Button>
    </Flex>


    <Flex className='FooterChild' gap="56px" flexDir="column">
      <Flex onClick={()=>{router.push("contact")}} alignItems="center" justifyContent="center" className='GradientButton' height="57px" >
      <Text 
      color="white">
Contact Us
</Text>
      </Flex>
      <Flex gap="24px" flexDir="column">
      <Text fontWeight="bold">+971522860547</Text>
      <Text fontWeight="bold">info@mnvassociates.com</Text>
      </Flex>
    </Flex>

<Flex  height="20%" justifyContent={["flex-start","flex-start","flex-start","center"]} className='FooterChild' flexDir="column">
<Text className='Heading5'>Stop wasting time.</Text>
<Text className='Heading5'>Let the experts handle your Accounting.</Text>
    
    </Flex>
    <Flex flexDir="column" paddingBottom="40px">
<Text>
30 & 31 Floor, Single Business Tower
</Text>
<Text>
PO Box: 124373 Dubai, UAE
</Text>
<Text>
Phone: +971 4 507 2033
</Text>
<Text>
Working Hours: Monday- Friday 9.00- 18.00
</Text>
</Flex>
</Flex>
</Flex>
  )
}

export default Footer