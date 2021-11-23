import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayTable from '../DisplayTable/DisplayTable';
import Header from '../Header/Header';
import Shortener from '../Shortener/Shortener';


const Home = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Shortener></Shortener>
                <DisplayTable></DisplayTable>
            </Container>
        </div>
    );
};

export default Home;