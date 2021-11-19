import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayTable from '../DisplayTable/DisplayTable';
import Shortener from '../Shortener/Shortener';


const Home = () => {
    return (
        <div>
            <Container>
                <Shortener></Shortener>
                <DisplayTable></DisplayTable>
            </Container>
        </div>
    );
};

export default Home;