import React from 'react'
import Logo from '../img/logoNB.png'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

function Navbars() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className=''>
              <img
                src={Logo}
                width=""
                height=""
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                fill="#F95543"
                className="bi bi-calendar-range-fill"
                viewBox="0 0 16 18"
              >
                <path
                  d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z"
                />
              </svg>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand href="#" className=''>
                    <img
                      src={Logo}
                      width=""
                      height=""
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 mx-2">
                  <Nav.Link className='fw-semibold fs-5' href="#">Home</Nav.Link>
                  <Nav.Link className='fw-semibold fs-5' href="#action1">Login</Nav.Link>
                  <NavDropdown className='fw-semibold fs-5'
                    title="About us"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action2">Contatti</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Dove trovarci?
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      FAQ
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbars;



