import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  Box,
  Button,
  VStack,
  Text
} from "@chakra-ui/react";

import ItemsTable from "./ItemsTable";

import { logout } from '../utils/Auth'

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Flex height="100vh">
            <Box bg="gray.200" width="250px" p={4}>
                <VStack spacing={2}>
                    <Button colorScheme='teal' variant='ghost' onClick={() => {
                        logout()
                        navigate('/')
                        }}>Logout</Button>
                </VStack>
            </Box>
            <Flex flex="1" p={4} flexDirection="column">
                <Box boxShadow="lg" borderRadius="md" overflow="hidden">
                    <Tabs>
                    <TabList>
                        <Tab>My Items</Tab>
                        <Tab>Items in My Custody</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ItemsTable/>
                        </TabPanel>
                        <TabPanel>
                            <Text>Under Construction</Text>
                        </TabPanel>
                    </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
