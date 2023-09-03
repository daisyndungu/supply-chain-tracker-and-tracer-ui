import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';

interface FormData {
    username: string,
    emailAddress: string,
    address: string,
    companyName: string,
    city: string,
    country: string,
    phoneNumber: string, // Peform phone number verification
    // userRole: UserRole,//TODO
    password: string
}

interface ApiResponse {
  message: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    emailAddress: '',
    address: '',
    companyName: '',
    city: '',
    country: '',
    phoneNumber: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<ApiResponse>('http://localhost:3000/supplychain/api/v1/register', formData);
      console.log('Registration successful', response.data);
    } catch (err) {
      setError('Registration failed. Please check your data.');
    }
  };

  return (
    <>
      <Heading mb={4}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="emailAddress" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              variant='flushed'
              type="email"
              name="emailAddress"
              placeholder="Enter your Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="companyName" isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="companyName"
              placeholder="Enter your email"
              value={formData.companyName}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="country" isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              variant='flushed'
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              variant='flushed'
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Register
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

export default RegistrationForm;
