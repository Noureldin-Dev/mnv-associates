import { Flex, Text } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import PricingIcon from "../public/PricingIcon.svg"
import AccountingImage from "../public/AccountingImage.svg"
import AwardIcon from "../public/AwardIcon.svg"
import BankIcon from "../public/BankIcon.svg"
function Accounting_Bookkeeping() {
  return (
<Flex gap="80px" flexDir="column">
    <Flex  gap="24px" flexDir="column"> 
    <Flex flexDir="column" gap="8px">
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>Service</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>Accounting & Bookkeeping</Text>
<Text fontSize="lg"> Accounting and bookkeeping are the backbone of any successful business. They involve keeping track of a company's financial transactions and making sure everything adds up correctly.</Text>
</Flex>
<Flex alignItems='center' gap="64px" justifyContent="space-evenly" flexWrap="wrap" >
    <Image height={300} width={300} src={AccountingImage}/>
    <Flex gap="16px" className='ServiceMainText' flexDir="column">
    <Text fontSize="lg" color="white">
        Bookkeeping is the foundation of accounting. It's the process of recording financial transactions, such as sales, expenses, and payments, in a systematic and organized way. This ensures that a company's financial records are accurate and up-to-date.
</Text>
<Text fontSize="lg" color="white">
Both accounting and bookkeeping are essential for managing a company's finances effectively. They provide insights into a company's financial performance, help with tax compliance, and enable business owners to make informed decisions about their operations.
</Text>
</Flex>

</Flex>
</Flex>




<Flex gap="40px" flexDir="column" width="100%">
    <Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>Why Choose us for your Accounting & Bookkeeping needs?</Text>
    <Flex flexDir="column" gap="24px">
    <Flex flexWrap="wrap" className='BenefitsPills'>
        <Image  color='white' height={90} width={90} src={PricingIcon} />
        <Text textAlign={["center","center","center","inherit"]}  flex={1} minW="80%" fontSize="lg" color="white">Our outcoursed accounting services are unmatched in quality and value, with competitive pricing and a proven track record of delivering results for our clients.</Text>
    </Flex>
    <Flex flexWrap="wrap" className='BenefitsPills'>
        <Image  color='white' height={90} width={90} src={AwardIcon} />
        <Text textAlign={["center","center","center","inherit"]}  flex={1} minW="80%" fontSize="lg" color="white">Our accounting outsourcing team is committed to providing you with exceptional service
and finding innovative ways to make your experience with us nothing but outstanding.</Text>
    </Flex>
    <Flex flexWrap="wrap" className='BenefitsPills'>
        <Flex padding={15}>
        <Image  color='white'  height={60} width={60} src={BankIcon} />
        </Flex>
        <Text textAlign={["center","center","center","inherit"]}  flex={1} minW="80%" fontSize="lg" color="white">We'll take care of everything from bank statement reconciliation and transaction categorization to preparing financial statements and filing tax returns.</Text>
    </Flex>
    </Flex>
</Flex>
<Flex flexDir="column" gap="16px" marginBottom="-32px">
<Text fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Stop wasting time. Let the experts handle your Accounting.</Text>
<Text fontSize="lg">we're committed to delivering exceptional value and service to our clients. That's why we offer a free 30-minute advisory session to help you get started and answer any questions you may have about our accounting and bookkeeping services.</Text>
</Flex>
</Flex>
  )
}

export default Accounting_Bookkeeping