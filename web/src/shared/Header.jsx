import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Button,
  Image
} from "react-bootstrap";


const Header = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
      <Container className="navbar-flex">
        <Navbar.Brand href="/">
          <Image
            src="/images/StudyItLiveLogo.svg"
            width="65"
            height="65"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <div className="navlink-flex">
              <Nav.Link href="/" className='poppins-500' id='nav-link'>
                <b>Home</b>
              </Nav.Link>
              <Nav.Link href="#" className='poppins-500'>
                <b>Courses</b>
              </Nav.Link>
              <Nav.Link href="#" className='poppins-500'>
                <b>Blog</b>
              </Nav.Link>
              <Nav.Link href="#" className='poppins-500'>
                <b>About Us</b>
              </Nav.Link>
            </div>
            <div className="navlink-btn">
              <Button variant='outline-light' href="/login" id="navbar-button" className='poppins-700' style={{ width: "100px", borderColor: "#1B2C98", color: "#1B2C98" }}>Login</Button>&nbsp;
              <Button variant='outline-light' href="/usertype" id="navbar-button2" className='poppins-700' style={{ width: "100px", backgroundColor: "#1B2C98", borderColor: "#1B2C98" }}>Join</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
