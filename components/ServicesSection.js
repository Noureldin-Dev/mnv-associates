import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ServiceBox from './ServiceBox'

function ServicesSection() {
  return (
<Flex 
// background="yellow" 
gap="40px" flexDir="column">
<Text fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Our Services</Text>
<Flex alignSelf="center" gap="32px" rowGap="32px" flexWrap="wrap">
    <Flex gap="32px" flexDir="column">
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    </Flex>
    <Flex gap="32px" flexDir="column">
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    <ServiceBox Title="Accounting & Bookkeeping" Description="Maximize tax efficiency and compliance with expert tax services." Destination="Accounting_Bookkeeping"/>
    </Flex>
</Flex>
</Flex>
  )
}

export default ServicesSection