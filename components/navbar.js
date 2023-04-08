import {  Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react'
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


<Flex
    ref={btnRef}  onClick={onOpen}
    id='MobileBurgerMenu'  alignItems='center'
  justifyContent="center">
<List  size="30px" />
</Flex>





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
      
                <DrawerBody paddingBottom="32px" alignItems="center"  display="flex" gap={5} flexDirection="column">
                <Button 
                onClick={()=>{
                  onClose()
                  router.push('About')
                }}
                width="100%"
                >About Us</Button>

<ServicesMobileDropdown onClose={onClose}/>   

                <Button 
                width="100%"
                onClick={()=>{
                  onClose()
                  router.push('Blog')
                }}
                >Blog</Button>
                <Flex
                onClick={()=>{
                  onClose()
                  router.push("/contact")
                
                
                }}
className='GradientButton'
color="white"
height="57px"
 
width="100%"
alignItems="center"
justifyContent='center'


variant="link" >
<Text color="white">
  Contact Us</Text></Flex>
                
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
    <Button onClick={()=>router.push("About")} colorScheme='black' variant="link" >About Us</Button>

<ServicesDropDown/>
<Button onClick={()=>router.push("Blog")} colorScheme="black" variant="link" >Blog</Button>
<Flex
onClick={()=>router.push("/contact")}
className='GradientButton'
color="white"
justifyContent="center"
alignItems="center"
variant="link" >
  <Text color="white">Contact Us</Text>
  </Flex>
</Flex>
<Flex gap={2}>
<Image onClick={()=>{window.open("https://www.instagram.com/mnvassociates/", '_blank');}} style={{cursor:"pointer"}} src= {Instagram} width={30} height={30}/>
<Image onClick={()=>{window.open("https://www.facebook.com/mnvassociates/", '_blank');}}  style={{cursor:"pointer"}} src= {Facebook} width={30} height={30}/>
<Image onClick={()=>{window.open("https://ae.linkedin.com/company/mnv-associates", '_blank');}}   style={{cursor:"pointer"}} src= {Linkedin} width={30} height={30}/>
</Flex>

</Flex>
</Flex>
{/* <Divider/> */}
</div>
  )
}

export default Navbar