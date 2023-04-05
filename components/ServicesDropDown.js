import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    Flex,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useState } from "react"

export default function ServicesDropDown() {
const [Open, setOpen] = useState(false)
    return (
        <>


        <Button
                        transitionDelay="10s"

        onMouseEnter={()=>setOpen(true)}
                onMouseLeave={()=>setOpen(false)}
                >Services</Button>

<Flex marginTop="40px" gap={10} onMouseEnter={()=>setOpen(true)}
                onMouseLeave={()=>setOpen(false)} 
                background="honeydew"
                
                position="absolute" display={Open?"flex":"none"}  padding={10}>

                    <Flex gap={5} flexDir="column">
<Button>Accounting & Bookkeeping</Button>
                <Button>Tax Services</Button>
                <Button>Audit & Assurance</Button>
                </Flex>
                <Flex gap={5} flexDir="column">
                <Button>CFO Services</Button>
                <Button>VAT Services</Button>
                <Button>Company Liquidation</Button>
                </Flex>
</Flex>
        </>
       
    )
}