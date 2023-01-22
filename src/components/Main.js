import React from 'react'
// eslint-disable-next-line
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
// import Sample from '../img/SampleNB.png';

function Main() {
    return (
        <>
            <div>
                <Card.Text className="fs-2 mt-4 mb-5">
                    Come possiamo aiutarti?
                </Card.Text>
            </div>
            <div className="d-flex justify-content-center">
                <Form className="d-flex mt-4 mb-5" style={{ width: '20rem' }}>
                    <Form.Control
                        type="search"
                        placeholder="Cerca un protocollo.."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-danger">Cerca</Button>
                </Form>
            </div>


        </>
    )
}

export default Main


    // < Row xs = { 1} md = { 2} className = "g-4 p-3" >
    // {
    //     Array.from({ length: 6 }).map((_, idx) => (
    //         <Col>
    //             <Card>
    //                 <Card.Img variant="top" src={Sample} />
    //                 <Card.Body>
    //                     <Card.Title>Card title</Card.Title>
    //                     <Card.Text>
    //                         This is a longer card with supporting text below as a natural
    //                         lead-in to additional content. This content is a little bit
    //                         longer.
    //                     </Card.Text>
    //                 </Card.Body>
    //             </Card>
    //         </Col>
    //     ))
    // }
    //         </Row > 