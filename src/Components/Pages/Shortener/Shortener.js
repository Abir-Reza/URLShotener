import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';


const Shortener = () => {
    let [url, setUrl] = useState({});
    

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        
        const newUrl ={...url};
        newUrl[field] = value;
        setUrl(newUrl);
        
        

    }

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        
        const data = {...url};

        // send to Server
        fetch('http://localhost:5000/url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("Sent to server : ", data);

        })

        
        window.location.reload(false);

    }

    return (
        <div>
            
            <h1 className="mt-3 mb-5"> URL Shortener</h1>
            <Form onSubmit={handleUrlSubmit}>
                <Row className="align-items-center">
                    <Col sm={9} className="my-1">
                    
                    <Form.Control 
                    onChange={handleOnChange}
                    name="longUrl"
                    id="inlineFormInputName" placeholder="Long URL" />
                    </Col>
                
                    
                    <Col xs="auto" className="my-1">
                    <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            
        </div>
    );
};

export default Shortener;