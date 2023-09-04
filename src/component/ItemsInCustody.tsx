import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useToast,
} from "@chakra-ui/react";

import ItemsTable from './ItemsTable';

import { IItem, SERVER_URL, TOKEN_KEY } from "../utils/Constants";

const ItemsInCustody: React.FC = () => {
  const [myItems, setMyItems] = useState<IItem[]>([]);
  const [error, setError] = useState<string | null>(null);
const toast = useToast()

  useEffect(() => {
    const getItems = async () => {
      await axios
        .get(`${SERVER_URL}/items?isCustodian=true`, {
          headers: {
            Authorization: localStorage.getItem(TOKEN_KEY),
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setMyItems(res.data.data);
        })
        .catch((error) => {
          const err = error.response.data.error;
          toast({
            title: "",
            description: err,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          setError(err)
        });
    };
    getItems();
  }, [error, toast]);

  return (<ItemsTable error={error} items={myItems} hideEventsBtn={true} />);
};

export default ItemsInCustody;
