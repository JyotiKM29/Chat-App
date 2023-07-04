import React from 'react'
import { FormControl, FormLabel, Input, InputGroup, VStack } from '@chakra-ui/react'
import { useState } from 'react';

const Signup = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [passward , setPassward] =useState();
    const [confirmpassward , setconfirmpassward] =useState();
    const [pic , setPic] = useState();

  return <VStack>
        <FormControl >
            {/* Name */}
            <FormLabel id='first-name'
             isRequired>
            Name</FormLabel>
            <Input
             placeholder='Enter your Name'
             onChange={(e) => setName(e.target.value)}
            ></Input>

            {/* Email */}
            <FormLabel id='first-name'
             isRequired>
            Email</FormLabel>
            <Input
             placeholder='Enter your Email'
             onChange={(e) => setName(e.target.value)}
            ></Input>


             {/* Passward */}
            <FormLabel id='first-name'
             isRequired>
            Passward</FormLabel>
            <InputGroup>
            <Input
             type = {'passward'}
             placeholder='Enter your Passward'
             onChange={(e) => setName(e.target.value)}
            ></Input>
            </InputGroup>
        </FormControl>
  </VStack>
}

export default Signup
