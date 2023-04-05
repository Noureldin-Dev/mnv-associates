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

function ServicesMobileDropdown() {
    const [Open, setOpen] = useState(false)
  return (
<>
<Button width="100%"  onClick={()=>setOpen(!Open)}>Services</Button>
<Flex width="80%" gap={5} display={Open? "flex":'none'} flexDir="column">
<Button width="100%">Accounting & Bookkeeping</Button>
                <Button  width="100%">Tax Services</Button>
                <Button width="100%">Audit & Assurance</Button>
                <Button width="100%">CFO Services</Button>
                <Button width="100%">VAT Services</Button>
                <Button width="100%">Company Liquidation</Button>
</Flex>
</>
  )
}

export default ServicesMobileDropdown