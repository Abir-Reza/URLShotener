import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';


const Shortener = () => {
    const [url, setUrl] = useState({});  
    const [error, setError] = useState("");    

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        
        const newUrl ={...url};
        newUrl[field] = value;
        setUrl(newUrl);  
       
    }
    

    const handleUrlSubmit = (e) => {
        e.preventDefault(); 
        let data = {
            ...url
        };
        
                
        if( isValidUrl(data.longUrl)){ 
            // SAVE url to database
            saveUrl(data,'POST');

            // update shorten attempt count 
            handleAttemptCount(data);

            setError('');
            // setUrl({}); 
            data= {};
            document.getElementById("form").reset();
        }
        else{
            setError("Invalid URL. Insert a non-empty valid URL ");
            document.getElementById("form").reset();
            return;
        }
        
    }


    const saveUrl =(data,method) => {
      
        // send to Server
        fetch('https://floating-beach-36985.herokuapp.com/url', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res =>{
            res.json();
        } )
       
    }

    const handleAttemptCount = (data) => {
        saveUrl(data,'PUT');
    }

    const isValidUrl =(url) => {
        const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

        const flag =regex.test(url);
        console.log(url);
        console.log(flag);
        return flag;       

    }
   
    return (
        <div>          
            <h1 className="mt-3 mb-5"> </h1>
            <Form id="form" onSubmit={handleUrlSubmit}>
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

            <div>
                { error && <Alert variant={"danger"}>{error}</Alert>}    
            </div>
            
            
        </div>
    );
};

export default Shortener;