import React from 'react';
import { Table, Thead, Th, Tr, Tbody, Td } from '@chakra-ui/react'

import { IItem } from '../utils/Constants'

const ItemsTable: React.FC<{items: IItem[]}> = ({items}) => {

    return(
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
            {/* add on click to redirect to other pages */}
            {items && items.map((item) => { return(<Tr>
                <Td>{item.name}</Td>
                <Td>{item.color}</Td>
                <Td>{item.serialNumber}</Td>
                <Td>{item.status}</Td>
                <Td>View Events </Td> 
            </Tr>)
            })}
        </Tbody>
    </Table>
    )
}

export default ItemsTable