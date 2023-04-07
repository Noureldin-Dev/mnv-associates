import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
  } from '@chakra-ui/react'
import { Arrow90degDown } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'

function ServicesMobileDropdown({onClose}) {
    const [Open, setOpen] = useState(false)
    const router = useRouter()
  return (
<>
<Button width="100%"  onClick={()=>setOpen(!Open)}>Services</Button>
<Flex width="80%" gap={5} display={Open? "flex":'none'} flexDir="column">
<Flex onClick={()=>{
onClose()
  router.push("Accounting_Bookkeeping")}} gap={10} alignItems="center">
<Arrow90degDown size={20} style = {{transform: 'rotate(-90deg)' }} />
<Button width="100%">Accounting & Bookkeeping</Button>
</Flex>
<Flex onClick={()=>{
onClose()
  router.push("TAX")}} gap={10} alignItems="center">
<Arrow90degDown size={20} style = {{transform: 'rotate(-90deg)' }} />
<Button width="100%">Tax Services</Button>
</Flex>
<Flex onClick={()=>{
onClose()
  router.push("Audit_Assurance")}} gap={10} alignItems="center">
<Arrow90degDown size={20} style = {{transform: 'rotate(-90deg)' }} />
<Button width="100%">Audit & Assurance</Button>
</Flex>
<Flex onClick={()=>{
onClose()
  router.push("CFO")}} gap={10} alignItems="center">
<Arrow90degDown size={20} style = {{transform: 'rotate(-90deg)' }} />
<Button width="100%">CFO Services</Button>
</Flex>
<Flex onClick={()=>{
onClose()
  router.push("VAT")}} gap={10} alignItems="center">
<Arrow90degDown size={20} style = {{transform: 'rotate(-90deg)' }} />
<Button width="100%">VAT Services</Button>
</Flex>
<Flex onClick={()=>{
onClose()
  router.push("Company_Liquidation")}} gap={10} alignItems="center">
<Arrow90degDown size={20} style = {{transform: 'rotate(-90deg)' }} />
<Button width="100%">Company Liquidation</Button>
</Flex>
              
</Flex>
</>
  )
}

export default ServicesMobileDropdown