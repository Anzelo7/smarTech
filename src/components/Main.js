import React from 'react'
import { useState } from 'react';
import {*} from .src/img/seller;
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import JSONDATA from './MOCK_DATA.json';

function Main() {
    const [searchTerm, setSerchTerm] = useState("");
    return (
        <>
            <div>
                <figure className="text-center mt-5">
                    <blockquote className="blockquote">
                        <h2>Come possiamo aiutarti?</h2>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        I nostri tecnici affiliati ti aiuteranno nelle tue mansioni. <cite title="Source Title">Contattali!</cite>
                    </figcaption>
                </figure>
            </div>
            <div className="d-flex justify-content-center">
                <Form className="d-flex mt-5 mb-5" style={{ width: '20rem' }}>
                    <Form.Control
                        type="search"
                        placeholder="Cerca qui.."
                        className="me-2"
                        aria-label="Search"
                        onChange={(event) => {
                            setSerchTerm(event.target.value);
                        }}
                    />
                    <Button variant="outline-danger">Cerca</Button>
                </Form>
            </div>
            <div className='container-data'>
                {JSONDATA.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.job.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className='mt-5' key={key}>
                            < Row xs={1} md={2} className="g-4 p-3" >
                                <Col>
                                    <Card>
                                        <img src="{val.image}" />
                                        <Card.Body>
                                            <Card.Title>{val.name}</Card.Title>
                                            <Card.Text>{val.phone} - {val.email}</Card.Text>
                                            <Card.Text className='fs-5'>{val.job}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row >
                        </div>
                    );
                })}
            </div>

        </>
    )
}

export default Main


