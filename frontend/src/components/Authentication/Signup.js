import React from "react";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from '@chakra-ui/react';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();


  // show and hide button
  const handleClick = () => setShow(!show);

  
  const postDetails = (pics) =>{
     setLoading(true);
     if(pics === undefined){
      toast({
        title: "Please Select an Image !",
        status: "Warning",
        duration: 5000,
        isClosable: true,
        position:"buttom",
      });
      return;
     }
    
    //  uplaod check and storing
    if(pics.type === 'image/jpeg' || pics.type === 'image/png'){
      const data = new FormData();
      data.append("file",pics);
      data.append("upload_preset","Chat-App");
      data.append("cloud_name","dxuurzxsh");
      fetch("https://api.cloudinary.com/v1_1/dxuurzxsh/image/upload" ,{
        method:"post",
        body: data,
      })
      .then((res) => res.json())
      .then((data) =>{
        setPic(data.url.toString());
        console.log(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    }else{
      toast({
        title:"Please Select an Image!",
        status: "Warning",
        duration: 5000,
        isClosable: true,
        position: "buttom"
      });

      setLoading(false);
      return;
    }

  } 

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
      <FormControl id="password" isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Passward"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem" >
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>


      {/* Confirm Passward */}
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>
          Confirm Passward
        </FormLabel>
        <InputGroup size="md">
          <Input
            type={show?"text":"password"}
            placeholder="Confirm Passward"
            onChange={(e) => setconfirmpassword(e.target.value)}
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
      isloading = "false"
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
