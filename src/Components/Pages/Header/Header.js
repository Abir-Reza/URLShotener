import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" >
                <Container>
                <Navbar.Brand href="#home">URL Shortener</Navbar.Brand>
                
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;