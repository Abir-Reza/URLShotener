import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './DisplayTable.css'

const DisplayTable = () => {
    const [urlList, setUrlList] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/url')
        .then(res=> res.json())
        .then(data => {
            setUrlList(data);
        })
    },[])

    const renderUrl = (url) => {
        return(
            <tr>            
                <td>{url.longUrl}</td>
                <td><a href={url.urlcode}>{url.urlcode}</a> </td>
                    
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
                    <th>Clicked</th>
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