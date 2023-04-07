import {  Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useRef } from 'react'
import Logo from "../public/logo.png"
import ServicesDropDown from "./ServicesDropDown"
import Facebook from "../public/Facebook.svg"
import Instagram from "../public/Instagram.svg"
import Linkedin from "../public/Linkedin.svg"
import { List } from 'react-bootstrap-icons'
import ServicesMobileDropdown from './ServicesMobileDropdown'
import { useRouter } from 'next/router'


function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
      

const router = useRouter()

  return (
    <div style={{marginBottom:"-8px"}}>
<Flex
alignItems='center'
padding="0px 64px"
// background="yellow"
justifyContent="space-between"

>
<Image
onClick={()=>router.push("/")}
style={{cursor:"pointer"}}
src={Logo}
width={80}
height={80}/>
<>

<IconButton
//   colorScheme='blue'
  alignItems='center'
  justifyContent="center"
  display="flex"
//   size="lg"

    id='MobileBurgerMenu' ref={btnRef}  onClick={onOpen}
  icon={<List  size="30px" />}
/>




            <Drawer
              isOpen={isOpen}
              placement='top'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent >
                <DrawerCloseButton size="lg" />
                <DrawerHeader display="flex" 
                // background='yellow' 
                justifyContent="center">
                <Image
src={Logo}
width={100}
height={100}/>
                </DrawerHeader>
      
                <DrawerBody alignItems="center"  display="flex" gap={5} flexDirection="column">
                <Button 
                width="100%"
                >About Us</Button>

<ServicesMobileDropdown/>   

                <Button 
                width="100%"
                >Blog</Button>
                <Button
className='GradientButton'
color="white"
height="57px"
 
width="100%"


variant="link" >Contact Us</Button>
                
                </DrawerBody>
      
              </DrawerContent>
            </Drawer>
          </>
<Flex 
// background="purple" 
id='DesktopNavBar' 
flex={1} justifyContent="space-evenly">
    <Flex 
    // background="orange.100"
    alignItems="center"
    justifyContent="space-evenly"
    flex={1}
     
     >
    <Button colorScheme='black' variant="link" >About Us</Button>

<ServicesDropDown/>
<Button colorScheme="black" variant="link" >Blog</Button>
<Button
className='GradientButton'
color="white"

variant="link" >Contact Us</Button>
</Flex>
<Flex gap={2}>
<Image src= {Instagram} width={30} height={30}/>
<Image src= {Facebook} width={30} height={30}/>
<Image src= {Linkedin} width={30} height={30}/>
</Flex>

</Flex>
</Flex>
{/* <Divider/> */}
</div>
  )
}

export default Navbar