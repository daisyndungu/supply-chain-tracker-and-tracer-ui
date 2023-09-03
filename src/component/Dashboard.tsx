import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import ItemsTable from './ItemsTable';

interface IItem { // TODO - refactor(move to utils)
    name: string;
    color: string;
    serialNumber: string;
    createdAt: Date,
    consumerId: string;
    createdBy: string;
    status: string;
}

const Dashboard: React.FC = () => {
    const [myItems, setMyItems] = useState<IItem[]>([]);

    useEffect(() => {
        const getItems = async (isCustodian: boolean, isOwner: boolean) => {
            await axios.get('http://localhost:3000/supplychain/api/v1/items?isOwner=true', {
                headers: {
                  "Content-Type": "application/json"
                },
              }).then((res) => {
                setMyItems(res.data.data);
              }).catch((error) => {
                console.log({error});
              });
        }
        getItems(false, true);
    }, [myItems])

    return(<Tabs>
        <TabList>
            <Tab>My Items</Tab>
            <Tab>Items in My Custody</Tab>
        </TabList>

        <TabPanels>
            <TabPanel><ItemsTable items={myItems} /></TabPanel>
        </TabPanels>
    </Tabs>)
}

export default Dashboard