import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Heading,
} from '@chakra-ui/react';

import { login } from '../utils/Auth'

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAuthenticated = await login(emailAddress, password);

    if(isAuthenticated){
        navigate('/dashboard');
    } else {
        setError('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <>
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="emailAddress" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              variant='flushed'
              type="text"
              placeholder="Enter your Email Adddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              variant='flushed'
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </VStack>
      </form>
      {error && (
        <Box mt={4} color="red.500">
          {error}
        </Box>
      )}
    </>
  );
};

export default LoginForm;
