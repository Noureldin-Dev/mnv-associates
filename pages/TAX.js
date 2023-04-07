import { Flex, Text, Divider } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import TaxImage from "../public/TaxImage.svg"
function Accounting_Bookkeeping() {
  return (
<Flex gap="80px" flexDir="column">
    <Flex  gap="24px" flexDir="column"> 
    <Flex flexDir="column" gap="8px">
<Text color="grey" fontSize={["xl","xl","xl","2xl"]}>Service</Text>
<Text fontWeight="bold" fontSize={["2xl","2xl","3xl","4xl"]}>Tax Services</Text>
<Text fontSize="lg">Our team of experienced tax consultants provides tax advisory services and support to small, medium enterprises, as well as private companies and individuals.</Text>
<Text fontSize="lg">We take care of tax risk management, ensuring that you meet all FTA deadlines and tax responsibilities.</Text>
</Flex>
<Flex flexDir="column" gap="48px">
<Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>Stay Ahead of Tax Deadlines with Personalized UAE Tax Assistance</Text>

<Flex alignItems='center' gap="64px" justifyContent="space-evenly" flexWrap="wrap-reverse" >
    
    <Flex backgroundColor="#EB4B35" gap="16px" className='ServiceMainText' flexDir="column">
    <Text fontSize="lg" color="white">We provide personalized assistance in relation to all tax-related matters in the UAE, helping you make sure that you always have the cash to pay FTA on time.</Text>
    <Text fontSize="lg" color="white">Whether you need help with filing your personal tax return or paying corporation tax on your company's profits, our advisors carefully analyze your company's financial affairs and develop the most practical way to manage all tax issues with transparency.</Text>

</Flex>
<Image height={300} width={300} src={TaxImage}/>

</Flex>
</Flex>
</Flex>



<Flex marginTop="-40px" gap="80px" flexDir="column" width="100%">
    <Flex flexDir="column" gap="24px">
<Divider/>
<Text fontWeight="bold" fontSize={["2xl","2xl","2xl","3xl"]}>Services</Text>
<Text fontSize="lg">At MNV Associates, we offer a wide range of tax services, including:</Text>
<Flex  alignSelf="center" width="fit-content" gap="24px" 

alignItems="center" filter="drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))" flexDir="column">
    <Flex justifyContent="center" flexWrap="wrap" gap="24px" >
        <Flex  flexDir="column" gap="24px">
            <Flex backgroundColor="#25232D" className='ServiceBar'>
<Text color="white" fontWeight="bold">
Tax Agent Services
</Text>
            </Flex>
            <Flex className='ServiceBar'>
<Text color="white" fontWeight="bold">
Tax Returns
</Text>
            </Flex>
            <Flex  backgroundColor="#25232D" className='ServiceBar'>
<Text color="white" fontWeight="bold">
Excise Tax
</Text>
            </Flex>
            <Flex className='ServiceBar'>
<Text color="white" fontWeight="bold">
Excise Returns Filing
</Text>
            </Flex>
        </Flex>
        <Flex flexDir="column" gap="24px">
            <Flex  backgroundColor="#25232D" className='ServiceBar'>
<Text  color="white" fontWeight="bold">
Tax Filing
</Text>
            </Flex>
            <Flex className='ServiceBar'>
<Text color="white" fontWeight="bold">
Excise Consultation
</Text>
            </Flex>
            <Flex  backgroundColor="#25232D" className='ServiceBar'>
<Text color="white" fontWeight="bold">
Excise Tax Registration
</Text>
            </Flex>
            <Flex className='ServiceBar'>
<Text color="white" fontWeight="bold">
Tax Domicile Certification
</Text>
            </Flex>
        </Flex>
    </Flex>

    <Flex alignSelf="center" width={["445px","445px","445px","445px","100%"]} backgroundColor="#25232D" className='ServiceBar'>
<Text color="white" fontWeight="bold">
Excise Impact Study & implementation
</Text>
            </Flex>

</Flex>
</Flex>

  
  <Flex flexDir="column" gap="24px">
<Text className='GradientText' textAlign='center' fontWeight="bold" fontSize={["3xl","3xl","3xl","4xl"]}>Whatever your tax needs, we have the expertise to help.</Text>
<Text textAlign='center' fontSize="lg">Contact us today to speak with one of our tax consultants and learn more about how we can help you or your company meet all tax responsibilities while maximizing savings and minimizing risk. Call us today: +971523750920.</Text>
</Flex>
</Flex>
</Flex>
  )
}

export default Accounting_Bookkeeping