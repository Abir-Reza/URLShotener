import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './DisplayTable.css'

const DisplayTable = () => {
    const [urlList, setUrlList] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/')
        .then(res=> res.json())
        .then(data => {
            setUrlList(data);
        })
    },[urlList])

    const handleVisitCount= (id) => {
        
         fetch(`http://localhost:5000/url/visits/${id}`, {
             method: 'PUT'
      
         })
         .then(res => res.json())
        
    }

    const renderUrl = (url) => {
        return(
            <tr key={url._id}>            
                <td>{url.longUrl}</td>
                <td><a href={url.shortUrl} onClick={() => handleVisitCount(url._id)}  target = "_blank">{url.urlcode}</a> </td>

                <td>{url.attemptCount}</td>
                <td>{url.visitCount}</td>
                    
            </tr>
        )
    }
    return (
        <div className="mt-5">
            <h2>Url List</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Long URL</th>
                    <th>Short Code</th>
                    <th>Attempt for shortening</th>
                    <th>Visit Count</th>
                    </tr>
                </thead>
                <tbody>
                    {urlList.map( renderUrl)}
                                     
                </tbody>
            </Table>
        </div>
    );
};

export default DisplayTable;