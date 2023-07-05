import React from "react";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [passward, setPassward] = useState();
 

  // show and hide button
  const handleClick = () => setShow(!show);

  


  const submitHandler = () =>{}

  return (
    <VStack spacing='2px'>
     

      {/* Email */}
      <FormControl id="email" isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>

      {/* Passward */}
      <FormControl id="passward" isRequired>
        <FormLabel>
          Passward
        </FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Passward"
            onChange={(e) => setPassward(e.target.value)}
          />
          <InputRightElement width="4.5rem" >
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    

      <Button
      colorScheme="blue"
      width="100%"
      color="white"
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        Login
      </Button>
      <Button
      colorScheme="red"
      width="100%"
      color="white"
      style={{marginTop:15}}
      onClick={
        () =>{
          setEmail("guest@example.com");
          setPassward("123456");
      }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
}

export default Login
