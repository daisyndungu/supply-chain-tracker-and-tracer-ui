import React, { useState } from "react";
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
  Text
} from "@chakra-ui/react";

import EventTrail from "./EventTrail";

import { IItem } from "../utils/Constants";

const ItemsTable: React.FC<{error: string | null, items: IItem[], hideEventsBtn?: boolean }> = ({error, items, hideEventsBtn=false}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string>('');

  const showEventsTrail = (item: IItem) => {
    setSelectedItemId(item._id);
    setSelectedItemName(item.name);
    onOpen();
  };

  return (
    <>
      {error || !items || items.length === 0 ? <Text> No items</Text> : (
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
            {items &&
            items.map((item: IItem) => {
              return (
                <Tr key={item._id}>
                  <Td>{item.name}</Td>
                  <Td>{item.color}</Td>
                  <Td>{item.serialNumber}</Td>
                  <Td>{item.status}</Td>
                  <Td>
                    <Button hidden={hideEventsBtn}
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
