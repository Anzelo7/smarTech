import React, { useState } from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { data } from './mock_data.js';

function Main() {
    const [search, setSearch] = useState("");
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
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <Button variant="outline-danger">Cerca</Button>
                </Form>
            </div>
            <div className='container-data d-flex justify-content-center flex-wrap'>
                {data.filter((item) => {
                    if (search === "") {
                        return item;
                    } else if (item.job.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    } return item;
                }).map((item) => {
                    return (
                        <div className='mt-5' key={item.id}>
                            < Row xs={1} md={1} className="g-4 p-3" >
                                <Col>
                                    <Card>
                                        <Card.Img src={item.image} alt=""/>
                                        <Card.Body>
                                            <Card.Title>{item.full_name}</Card.Title>
                                            <Card.Text className='fs-6 fw-semibold'>{item.title}</Card.Text>
                                            <Card.Text>{item.phone} - <a href=''>{item.email}</a></Card.Text>
                                            <Card.Text className='fs-6' style={{ width: '20rem' }}>{item.job}</Card.Text>
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

export default Main;




