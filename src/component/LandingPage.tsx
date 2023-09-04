import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react'
import RegistrationForm from './RegistrationForm';
import LoginForm from './Login';

const LandingPage: React.FC = () => {
    const [showLogin, setShowLogin] = useState(true);

    return(
    <header className="App-header">
        <Box p={4} borderWidth={0} borderRadius="md" boxShadow="dark-lg" minW='30%'>
            { showLogin ? <LoginForm /> : <RegistrationForm />}
            <Button px='8px' colorScheme='teal' variant='link' onClick={() => setShowLogin(!showLogin) }>
                {showLogin ? 'Create account': 'Already have an account, Login'}
            </Button>
        </Box>
    </header>
    )
}

export default LandingPage;