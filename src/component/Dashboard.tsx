import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  Box,
  Button,
  VStack
} from "@chakra-ui/react";

import ItemsTable from "./ItemsTable";

import { IItem, SERVER_URL, TOKEN_KEY } from "../utils/Constants";
import { logout } from '../utils/Auth'

const Dashboard: React.FC = () => {
  const [myItems, setMyItems] = useState<IItem[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async (isCustodian: boolean, isOwner: boolean) => {
      await axios
        .get(`${SERVER_URL}/items?isOwner=true`, {
            headers: {
              "Authorization" : localStorage.getItem(TOKEN_KEY),
              "Content-Type": "application/json",
              }
            })
        .then((res) => {
          setMyItems(res.data.data);
        })
        .catch((error) => {
          console.log({ error }); // TODO add toas for error
        });
    };
    getItems(false, true);
  }, []);

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
                    <ItemsTable items={myItems} />
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    </Flex>
  );
};

export default Dashboard;
