import { Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function BookConsulation() {
  return (
<Flex paddingBottom="40px" alignItems="center" flexWrap="wrap" rowGap="40px" gap="40px">
    <Flex flex={1} gap="16px" flexDir='column'>
        <Text className='GradientText' fontWeight='bold' fontSize={["2xl","2xl","3xl","4xl"]}>Book a FREE Consultation</Text>
        <Text fontSize="lg">We offer a free consultation to discuss your unique financial needs and offer tailored solutions that fit your business objectives.</Text>
        <Flex alignItems="center" flexDir="column" gap="8px">
        <Text >Are you in a hurry? Reach us on</Text>
        <Flex gap="16px">
        <Text fontWeight="bold">+971522860547</Text>
        <Text>or</Text>
        <Text fontWeight="bold">info@mnvassociates.com</Text>
        </Flex>
        </Flex>
    </Flex>
    <Flex gap="24px" flex={1} flexDir="column">
      <Flex gap="16px">
        <Flex gap="8px" flex={1} flexDir="column">
        <Text>Your Name</Text>
<Input placeholder='Name' />
</Flex>
<Flex gap="8px" flex={1} flexDir="column">
        <Text>Your Name</Text>
<Input placeholder='Name' />
</Flex>
</Flex>
<Flex gap="16px">
        <Flex gap="8px" flex={1} flexDir="column">
        <Text>Your Name</Text>
<Input isRequired placeholder='Name' />
</Flex>
<Flex  gap="8px" flex={1} flexDir="column">
        <Text>Your Name</Text>
<Input isRequired placeholder='Name' />
</Flex>
</Flex>
<Flex gap="8px" flex={1} flexDir="column">
        <Text>Your Inquiry</Text>
<Textarea minHeight={200} noOfLines={1} isRequired placeholder='Inquiry' />
</Flex>
    </Flex>
</Flex>
  )
}

export default BookConsulation