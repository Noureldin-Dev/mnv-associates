import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ServiceBox from './ServiceBox'

function ServicesSection() {
  return (
<Flex  marginTop="-24px"
// background="yellow" 
gap="40px" flexDir="column">
<Text id="ServicesSection" fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Our Services</Text>
<Flex alignSelf="center" gap="32px" rowGap="32px" flexWrap="wrap">
    <Flex gap="32px" flexDir="column">
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    <ServiceBox Title="Tax Services" Description="Get peace of mind with our reliable tax services." Destination="TAX"/>
    <ServiceBox Title="Audit & Assurance" Description="Gain insights and confidence with our comprehensive audit and assurance services for your business." Destination="Audit_Assurance"/>
    </Flex>
    <Flex gap="32px" flexDir="column">
    <ServiceBox Title="CFO Services" Description="Strategic financial leadership for your business with our expert CFO services." Destination="CFO"/>
    <ServiceBox Title="VAT Services" Description="Simplify VAT compliance with our professional and reliable VAT services." Destination="VAT"/>
    <ServiceBox Title="Company Liquidation" Description="Efficient and smooth company liquidation services for a stress-free process." Destination="Company_Liquidation"/>
    </Flex>
</Flex>
</Flex>
  )
}

export default ServicesSection