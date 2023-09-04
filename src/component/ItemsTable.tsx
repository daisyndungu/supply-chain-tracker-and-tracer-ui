import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  Text
} from "@chakra-ui/react";

import EventTrail from "./EventTrail";

import { IItem, SERVER_URL, TOKEN_KEY } from "../utils/Constants";

const ItemsTable: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string>('');
  const [myItems, setMyItems] = useState<IItem[]>([]);
  const [error, setError] = useState<string | null>(null);
const toast = useToast()

  useEffect(() => {
    const getItems = async () => {
      await axios
        .get(`${SERVER_URL}/items?isOwner=true`, {
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

  const showEventsTrail = (item: IItem) => {
    setSelectedItemId(item._id);
    setSelectedItemName(item.name);
    onOpen();
  };

  return (
    <>
      {error || !myItems || myItems.length === 0 ? <Text> No items</Text> : (
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Color</Th>
            <Th>SerialNumber</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
            {myItems &&
            myItems.map((item) => {
              return (
                <Tr key={item._id}>
                  <Td>{item.name}</Td>
                  <Td>{item.color}</Td>
                  <Td>{item.serialNumber}</Td>
                  <Td>{item.status}</Td>
                  <Td>
                    <Button
                      onClick={() => {
                        showEventsTrail(item);
                      }}
                    >
                      View Events
                    </Button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>)}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Event Trail for {selectedItemName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedItemId && <EventTrail itemId={selectedItemId} />}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemsTable;
