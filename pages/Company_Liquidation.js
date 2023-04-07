import { Flex, Text, Divider } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import AuditImage from "../public/LiquidationImage.svg"
function Accounting_Bookkeeping() {
  return (
<Flex gap="80px" flexDir="column">
    <Flex  gap="24px" flexDir="column"> 
    <Flex flexDir="column" gap="8px">
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>Service</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>Company Liquidation</Text>
<Text fontSize="lg">Looking to close your business? We know it's tough, but sometimes it's necessary.</Text>
</Flex>
<Flex flexDir="column" gap="48px">


<Flex alignItems='center' gap="64px" justifyContent="space-evenly" flexWrap="wrap-reverse" >
<Image height={300} width={300} src={AuditImage}/>
    
    <Flex background="#EC4B36"  gap="16px" className='ServiceMainText' flexDir="column">
    <Text fontSize="lg" color="white">At MNV Associates, we're here to help make the process as smooth as possible with our company liquidation services. Our team of experienced business advisors can assist you in deciding if liquidation is the right option for your situation and guide you through the process step by step.</Text>

</Flex>

</Flex>
<Divider/>
<Flex flexDir='column' gap="24px">
<Text fontWeight="bold"  fontSize={["2xl","2xl","2xl","3xl"]}>Personalized solutions for successful business recovery</Text>

<Text fontSize="lg" size="lg">We understand that every business is unique and that's why we offer personalized solutions to ensure the best outcome for you. Whether it's general partnership, limited liability, offshore or free zone companies, our proven track record in company liquidation in Dubai and across the UAE has helped many businesses get back on track.</Text>
</Flex>
<Flex flexDir='column' gap="24px">
<Text fontWeight="bold"  fontSize={["2xl","2xl","2xl","3xl"]}>Hassle-Free, Stress-Free</Text>

<Text fontSize="lg" size="lg">Our company liquidation service is designed to provide a seamless and stress-free process for business owners who are looking to wind down their operations. Whether you are facing insolvency or simply looking to close your business, we can help you navigate the complex legal and financial processes involved in liquidation.</Text>
<Text fontSize="lg" size="lg">Our team of experts has extensive experience in company liquidation and will work with you to develop a tailored plan that suits your specific needs. We will take the time to understand your business and its financial situation, and provide you with the best options available to you.</Text>
<Text fontSize="lg" size="lg">We offer a range of services, including preparing all necessary legal documents, negotiating with creditors, and dealing with all aspects of the liquidation process. We will also work to ensure that your assets are sold at the best possible price, so you can maximize your returns.</Text>
</Flex>



<Flex flexDir="column" gap="24px">
<Text className='GradientText' textAlign='center' fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Don't let financial pressures weigh you down.</Text>
<Flex flexDir='column'>
<Text textAlign="center" fontSize="lg">If you are considering liquidating your company, don't hesitate to contact our team today.</Text>
<Text textAlign="center" fontSize="lg">We are here to help you every step of the way and provide you with a seamless and stress-free liquidation process.</Text>
</Flex>
</Flex>



</Flex>
</Flex>


</Flex>
  )
}

export default Accounting_Bookkeeping