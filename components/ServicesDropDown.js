import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    Flex,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ServicesDropDown() {
const [Open, setOpen] = useState(false)
const router = useRouter()
    return (
        <>


        <Button
        variant="link"
        colorScheme="black"
                        transitionDelay="10s"
onClick={()=>{
    router.push("/").then(()=>{
        document.getElementById("ServicesSection").scrollIntoView()
    })
}}
        onMouseEnter={()=>setOpen(true)}
                onMouseLeave={()=>setOpen(false)}
                >Services</Button>

<Flex marginTop="40px" gap={10} onMouseEnter={()=>setOpen(true)}
                onMouseLeave={()=>setOpen(false)} 
                background="white"
                borderWidth="1px"
                zIndex={1000}
                position="absolute"
                top="1%"
                marginLeft="12%"
                display={Open?"flex":"none"}  padding={10}>

                    <Flex gap={5} flexDir="column">
<Link href="Accounting_Bookkeeping">Accounting & Bookkeeping</Link>
                <Link href="TAX">Tax Services</Link>
                <Link href="Audit_Assurance">Audit & Assurance</Link>
                </Flex>
                <Flex gap={5} flexDir="column">
                <Link href="CFO">CFO Services</Link>
                <Link href="VAT">VAT Services</Link>
                <Link href="Company_Liquidation">Company Liquidation</Link>
                </Flex>
</Flex>
        </>
       
    )
}