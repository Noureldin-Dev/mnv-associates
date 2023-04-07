import { Flex, Text, Divider } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import AuditImage from "../public/AuditImage.svg"
function Accounting_Bookkeeping() {
  return (
<Flex gap="80px" flexDir="column">
    <Flex  gap="24px" flexDir="column"> 
    <Flex flexDir="column" gap="8px">
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>Service</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>Audit & Assurance</Text>
<Text fontSize="lg">Our team of experienced tax consultants provides tax advisory services and support to small, medium enterprises, as well as private companies and individuals.</Text>
<Text fontSize="lg">We take care of tax risk management, ensuring that you meet all FTA deadlines and tax responsibilities.</Text>
</Flex>
<Flex flexDir="column" gap="48px">


<Flex alignItems='center' gap="64px" justifyContent="space-evenly" flexWrap="wrap-reverse" >
    
    <Flex  gap="16px" className='ServiceMainText' flexDir="column">
    <Text fontSize="lg" color="white">Are you looking for professional audit services in Dubai? Look no further than MNV Associates, one of the best audit firms in Dubai. With years of experience helping businesses comply with domestic and statutory audit regulations in the UAE, there's not a lot we haven't seen.</Text>
    <Text fontSize="lg" color="white">Our team of expert auditors will deliver reassurance to shareholders, partners, and creditors that your annual accounts are reliable. We're committed to helping our clients through the audit process, no matter how complex the situation.</Text>

</Flex>
<Image height={300} width={300} src={AuditImage}/>

</Flex>
<Divider/>
<Flex flexDir='column' gap={0}>
<Text  fontSize={["2xl","2xl","2xl","3xl"]}>Customized Audits for Mid-Tier Firms.</Text>
<Text  fontSize={["2xl","2xl","2xl","3xl"]}>Enhance Performance and Build Credibility.</Text>
</Flex>
<Text fontSize="lg" size="lg">As your reliable auditors in Dubai, we conduct audits for mid-tier firms and tailor our plan of action to the areas of high risk. The results of our internal audit services play a vital role in enhancing business performance, building credibility, and managing risk.</Text>
<Text fontSize="lg" size="lg">At MNV Associates, we know that audits can be daunting, but we're here to make the process as smooth and stress-free as possible. So why wait? Get in touch with us today and find out how our professional audit services can benefit your business.</Text>



<Flex flexDir="column" gap="24px">
<Text className='GradientText' textAlign='center' fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>What are you waiting for?</Text>
<Text textAlign="center" fontSize="lg">Simply complete the contact form below or call/message us on WhatsApp at +971 52 286 0547. We look forward to hearing from you!</Text>
</Flex>



</Flex>
</Flex>


</Flex>
  )
}

export default Accounting_Bookkeeping