import { Flex, Text, Divider } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import TaxImage from "../public/VATImage.svg"
import Head from 'next/head'
function Vat() {
  return (
    <> 
                   <Head>
    <title>VAT Services</title>
    <meta name="description" content="MNV Associates - The Best Accounting Firm In Dubai" />
  </Head>
  
<Flex gap="56px" flexDir="column">
    <Flex  gap="24px" flexDir="column"> 
    <Flex flexDir="column" gap="8px">
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>Service</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>VAT Services</Text>
<Text fontSize="lg">Expert support for businesses to manage and comply with Value Added Tax.</Text>
<Flex flexDir="column" paddingBottom={["16px","16px","16px", "32px"]} paddingTop={["16px","16px","16px", "32px"]} gap="48px">


<Flex alignItems='center' gap="64px" justifyContent="space-evenly" flexWrap="wrap-reverse" >
    
<Image height={300} width={300} src={TaxImage}/>
    <Flex  gap="16px" className='ServiceMainText' flexDir="column">
    <Text fontSize="lg" color="white">We provide personalized assistance in relation to all tax-related matters in the UAE, helping you make sure that you always have the cash to pay FTA on time.</Text>
    <Text fontSize="lg" color="white">Whether you need help with filing your personal tax return or paying corporation tax on your company's profits, our advisors carefully analyze your company's financial affairs and develop the most practical way to manage all tax issues with transparency.</Text>

</Flex>

</Flex>
</Flex>
</Flex>
<Text fontSize="lg">At MNV Associates, we pride ourselves on our expertise and attention to detail. Our team is dedicated to staying up-to-date with the latest regulations and compliance requirements to ensure that you are always in good standing with the authorities.</Text>

</Flex>
<Flex marginTop="-24px" gap="80px" flexDir="column" width="100%">
    <Flex flexDir="column" gap="24px">
<Divider/>
<Text fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Personalized Assistance</Text>
<Text fontSize="lg">We take the time to understand your business and provide personalized advice and guidance to help you optimize your VAT position and minimize your tax liability.</Text>
<Text fontSize="lg">Whether you are a small business owner, CEO, managing partner, entrepreneur, consultant, or a company director, we have the expertise that you need. Our team of VAT consultants in Dubai is always available to answer your questions, provide advice, and offer solutions to your VAT-related challenges.
</Text>
</Flex>

<Flex  flexDir="column" gap="40px">

<Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>Why choose MNV Associates for your VAT consultancy in Dubai?</Text>
<Text fontSize="lg">We have a proven track record of providing high-quality VAT services to clients across a range of industries. Our team is made up of experienced professionals who are passionate about delivering exceptional customer service and helping our clients achieve their goals.</Text>

</Flex>
  
  <Flex flexDir="column" gap="24px">
<Text className='GradientText' textAlign='center' fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Whatever your tax needs, we have the expertise to help.</Text>
<Text textAlign="center" fontSize="lg">If you're looking for reliable, efficient, and affordable VAT services in Dubai, look no further than MNV Associates. Contact us today to schedule a consultation or request a quote. Let us handle your VAT needs, so you can focus on growing your business.</Text>
</Flex>
</Flex>
</Flex>
</>
  )
}

export default Vat