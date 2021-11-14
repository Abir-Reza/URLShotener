import React from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1 className="mt-3 mb-5"> URL Shortener</h1>
            <Container>
            <Form>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Large URL" />
                    </Col>
                   
                    
                    <Col xs="auto" className="my-1">
                    <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
        </div>
    );
};

export default Home;