import React, {useState} from 'react';
import { Table, Thead, Th, Tr, Tbody, Td, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

import EventTrail from './EventTrail'

import { IItem } from '../utils/Constants'

const ItemsTable: React.FC<{items: IItem[]}> = ({items}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

    const showEventsTrail = (itemId: string) => {
      setSelectedItemId(itemId);
      onOpen();
    };

    return(<>
    <Table variant='simple' size='lg'>
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
            {items && items.map((item) => { return(<Tr key={item._id}>
                <Td>{item.name}</Td>
                <Td>{item.color}</Td>
                <Td>{item.serialNumber}</Td>
                <Td>{item.status}</Td>
                <Td><Button onClick={() => {showEventsTrail(item._id)}}>View Events</Button></Td> 
            </Tr>)
            })}
        </Tbody>
    </Table>
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Item Event Trail</ModalHeader>
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
    )
}

export default ItemsTable