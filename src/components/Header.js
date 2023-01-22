import React from 'react'
import { Card } from 'react-bootstrap';
import Sample from '../img/SampleNB.png';
import Logobig from '../img/smarTechBig.png';

function Header() {
    return (
        <>
            <div>
                <Card.Img variant="top" src={Logobig} className="mb-4 mt-5" style={{ width: '30rem' }} />
            </div>
            <div className="mt-5 d-flex justify-content-center flex-wrap">
                <Card className="" border="light" style={{ width: '70rem', backgroundColor: '#f5f4f2' }}>
                    <Card.Body>
                        <Card.Text className="fs-4 mb-3">
                            Superiamo le sfide di ogni giorno per un domani più digitale.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Sample} className="mt-5 mb-5" />
                </Card>
            </div>

        </>
    )
}
export default Header;
