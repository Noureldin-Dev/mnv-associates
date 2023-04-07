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
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>Service</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>CFO Services</Text>
<Text fontSize="lg">Are you ready to take your financial game to the next level?</Text>
</Flex>
<Flex alignItems='center' gap="64px" justifyContent="space-evenly" flexWrap="wrap" >
    
    <Flex gap="16px" className='ServiceMainText' flexDir="column">
    <Text fontSize="lg" color="white">
    Say hello to our high-caliber CFO services! Our expert financial advisors bring years of experience and strategic insight to the table, helping you implement new systems that provide cost-effective and long-term benefits for your company.
</Text>
</Flex>
<Image height={300} width={300} src={CFOIMAGE}/>

</Flex>
</Flex>



<Flex marginTop="-40px" gap="40px" flexDir="column" width="100%">
    <Flex flexDir="column" gap="32px">
<Divider/>
    <Text fontSize="lg">As your trusted financial partner, we'll carefully analyze your business's financial affairs and develop the most practical way to manage all your tax issues with transparency.</Text>
<Text fontSize="lg">
Plus, with our part-time CFO solution, you'll have access to valuable, timely, and independent perspectives that can help your business grow in ways you never thought possible.
</Text>
</Flex>
    <Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>You’re in good hands</Text>
    <Flex flexDir="column" gap="32px">
<Text fontSize="lg">
Our CFO service is designed to provide you with the financial expertise you need to take your business to the next level. Whether you are a small business owner or the CEO of a large corporation, we can help you manage your finances and make the best decisions for your company's future.
</Text>
<Text fontSize="lg">
Our CFOs have years of experience in the financial industry and can offer you a wide range of services, including financial reporting, budgeting and forecasting, cash flow management, and strategic planning.
</Text>
<Text fontSize="lg">
We will work closely with you to understand your business goals and develop a customized financial plan that is tailored to your specific needs.
</Text>
<Text fontSize="lg">
With our CFO service, you can rest assured that your finances are in good hands. We will provide you with timely and accurate financial information, so you can make informed decisions that will drive your business forward. Our team is dedicated to helping you achieve your goals and maximizing your profits.
</Text>
    </Flex>
</Flex>
<Flex flexDir="column" gap="16px" >
<Text textAlign="center" fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Stop wasting time. Let the experts handle your Accounting.</Text>
<Text textAlign="center" fontSize="lg">we're committed to delivering exceptional value and service to our clients. That's why we offer a free 30-minute advisory session to help you get started and answer any questions you may have about our accounting and bookkeeping services.</Text>
</Flex>
</Flex>
  )
}

export default Accounting_Bookkeeping