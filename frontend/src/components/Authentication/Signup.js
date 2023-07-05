import React from "react";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [passward, setPassward] = useState();
  const [confirmpassward, setconfirmpassward] = useState();
  const [pic, setPic] = useState();


  // show and hide button
  const handleClick = () => setShow(!show);

  
  const postDetails = (pics) =>{} 

  const submitHandler = () =>{}

  return (
    <VStack spacing='5px'>
      <FormControl id="first-name" isRequired>
        {/* Name */}
        <FormLabel>
          Name
        </FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>

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


      {/* Confirm Passward */}
      <FormControl id="passward" isRequired>
        <FormLabel>
          Confirm Passward
        </FormLabel>
        <InputGroup size="md">
          <Input
            type={show?"text":"password"}
            placeholder="Confirm Passward"
            onChange={(e) => setconfirmpassward(e.target.value)}
          />
          <InputRightElement width="4.5rem" >
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>


      {/* Profile Picture */}
      <FormControl id="pic">
      <FormLabel>Upload your Profile</FormLabel>
       <Input 
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e) => postDetails(e.target.files[0])}
       />
      </FormControl>

      <Button
      colorScheme="blue"
      width="100%"
      color="white"
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
