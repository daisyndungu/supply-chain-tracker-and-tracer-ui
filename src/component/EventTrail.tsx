import React, { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepIndicator, StepStatus, StepDescription, StepIcon, StepNumber, StepTitle, StepSeparator, useToast, Text } from '@chakra-ui/react';

import { IItemEvent, SERVER_URL, TOKEN_KEY } from '../utils/Constants'
import axios from 'axios';

const EventTrail: React.FC<{ itemId: string }> = ({ itemId }) => {

    const [ events, setEvents] = useState<IItemEvent[]>([]);
    const [error, setError] = useState<string | null>(null);
    const toast = useToast();

    useEffect(()=>{
        // Fetch all Item Events for a given item id
        axios.get(`${SERVER_URL}/items/${itemId}/events`,{
            headers: {
              "Authorization" : localStorage.getItem(TOKEN_KEY),
              "Content-Type": "application/json",
              }
        })
        .then((res) => {
            setEvents(res.data.data);
        }).catch((error) => {
            const err = error.response.data.error;
            toast({
                title: 'Account created.',
                description: err,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setError(err)
        });
    }, [itemId, toast, error]);

    return(<>
        {error || !events || events.length === 0 ? <Text> No Events Trails for this Item</Text> : (
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
                        <StepTitle>{event.custodian.companyName}</StepTitle>
                        <StepDescription>{event.location}</StepDescription>
                        <StepDescription>Email: {event.custodian.emailAddress}</StepDescription>
                        <StepDescription>Phone number: {event.custodian.phoneNumber}</StepDescription>
                    </Box>
                    <StepSeparator />
                </Step>
                ))}
            </Stepper>
        )}
    </>
    )
}

export default EventTrail;