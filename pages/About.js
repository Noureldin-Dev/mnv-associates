import { Flex, Text, Divider } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import PricingIcon from "../public/PricingIcon.svg"
import AccountingImage from "../public/AccountingImage.svg"
import AwardIcon from "../public/AwardIcon.svg"
import BankIcon from "../public/BankIcon.svg"
import CFOIMAGE from "../public/CFOIMAGE.svg"
function Accounting_Bookkeeping() {
  return (
<Flex gap="80px" flexDir="column">
    <Flex  gap="24px" flexDir="column"> 
    <Flex flexDir="column" gap="8px">
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>About Us</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>Who are we?</Text>
<Text fontSize="lg">We are MNV Associates, an accounting and bookkeeping services provider located in Dubai with over <span style={{fontSize:"18px"}} className='GradientText'>30 years of experience</span>. We specialize in VAT and Tax management accounts preparation and offer a personalized portfolio based on a strategy reflecting your situation. </Text>
<Text fontSize="lg">Our office is home to FTA approved taxation specialists, auditors, Chartered Accountants, and bookkeepers offering a complete suite of services that accounting outsourcing companies in Dubai can offer under one roof. </Text>
</Flex>

</Flex>



<Flex marginTop="-40px" gap="40px" flexDir="column" width="100%">
<Flex flexDir="column" width="100%" gap="8px">
    <Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>Our Mission</Text>

<Text fontSize="lg">
Our mission is to build trust, a stellar reputation amongst our clients, and improve every project we engage in by providing an unrivaled level of service, clear leadership, and creating value. 
</Text>
<Text fontSize="lg">
We have a vision of becoming one of UAE's most prestigious auditing and accounting firms with an integrated approach to support your company in setting up the accounting and financial reporting functions. 
</Text>
</Flex>
<Flex flexDir="column" width="100%" gap="8px">

<Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>Social Responsibility</Text>

<Text fontSize="lg">
We have a strong social responsibility to our organization, people, and society, which positively impacts our business. At MNV Associates, we offer advancement opportunities and great working hours, and we have a long record of satisfied clientele who have shared their experience with us.
</Text>
</Flex>
</Flex>
<Flex flexDir="column" gap="16px" >
<Text className='GradientText' textAlign="center" fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Stop wasting time. Let the experts handle your Accounting.</Text>
<Text textAlign="center" fontSize="lg">we're committed to delivering exceptional value and service to our clients. That's why we offer a free 30-minute advisory session to help you get started and answer any questions you may have about our accounting and bookkeeping services.</Text>
</Flex>
</Flex>
  )
}

export default Accounting_Bookkeeping