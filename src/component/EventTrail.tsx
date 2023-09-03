import React, { useState, useEffect } from 'react';
import axios from "axios";
import { MdCheckCircle } from 'react-icons/md'
import { Box, Stepper, Step, StepIndicator, StepStatus, StepDescription, StepIcon, StepNumber, StepTitle, StepSeparator } from '@chakra-ui/react';

enum Status {
    Dispatched = 'DISPATCHED',
    Pending = 'PENDING',
    Closed = 'CLOSED',
    InProgress = 'INPROGRESS',
    Cancelled = 'CANCELLED',
    DELIVERED = 'DELIVERED'
}

interface IItemEvent {
    _id: string,
    itemId: string,
    custodianId: string,
    updatedBy: string
    createdAt: Date,
    location: string,
    status: Status,
}

const EventTrail: React.FC<{ itemId: string }> = ({ itemId }) => {

    const [ events, setEvents] = useState<IItemEvent[]>([]);
    
    useEffect(()=>{
        // Fetch all Item Events for a given item id
        axios.get(`http://localhost:3000/supplychain/api/v1/items/${itemId}/events`, {
            headers: {
              "Content-Type": "application/json"
            },
          })
        .then((res) => {
            setEvents(res.data.data);
            console.log(res.data.data)
            // setLoading(false);
        }).catch((error) => {
            console.log({error});
        });
    }, [itemId]);

    return(
        <Stepper index={events.length - 1} orientation='vertical' height='400px' gap='0' >
            {events && events.map((event: IItemEvent, index: number) => (
                <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
      
                <Box flexShrink='0'>
                  <StepTitle>{event.location}</StepTitle>
                  <StepDescription>{event.status}</StepDescription>
                </Box>
      
                <StepSeparator />
              </Step>
            ))}
        </Stepper>
    )
}

export default EventTrail;