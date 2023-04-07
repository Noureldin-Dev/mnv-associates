import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ServiceBox({Title, Description, Destination}) {
  const router = useRouter()
  return (
<Flex maxWidth="500px" borderRadius={10} borderWidth={1} borderColor="#1A0806" padding="16px 32px" height="245px" gap="32px" flexDir="column" alignItems="center" justifyContent="center">
<Text textAlign="center" fontSize="2xl" fontWeight="bold">{Title}</Text>
<Text>{Description}</Text>
<Flex onClick={()=>router.push(Destination)} alignSelf="center" className='OutlinedButton'>
    <Link href={Destination} >Learn more</Link>
</Flex>
</Flex>
  )
}

export default ServiceBox