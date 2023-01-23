import React from 'react'
import { Card, Nav } from 'react-bootstrap'
import Logo from '../img/logoNB.png'

function Footer() {
    return (

        <Card.Footer className='d-flex justify-content-between bg-light-dark mt-4' style={{ backgroundColor: '#282c34' }}>
            <Nav.Link className='mt-1' title='social'>
                <i className="bi bi-facebook fs-2 mx-3" style={{ color: "white" }}></i>
                <i className="bi bi-twitter fs-2" style={{ color: "white" }}></i>
                <i className="bi bi-discord fs-2 mx-3" style={{ color: "white" }}></i>
            </Nav.Link>
            <Nav.Link href="#" className='mt-1' title='smallLogo'>
                <img
                    src={Logo}
                    width=""
                    height=""
                    className=""
                    alt=""
                />
            </Nav.Link>
            <div>
                <Nav.Item>
                    <Nav.Link href="/home" className="fs-5 mt-4 mx-2" style={{ color: "white" }} title='linkBio'>smarTech@business.org</Nav.Link>
                </Nav.Item>
            </div>
        </Card.Footer>
    )
}

export default Footer