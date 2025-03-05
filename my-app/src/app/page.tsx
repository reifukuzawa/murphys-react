"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar id="topMenu" expand="lg" className="pb-3">
    <Container className="w-100">
        <Nav className="me-auto">
          <Image 
            src="http://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/murphyslogowhite.png" 
            alt="logo"  
            width="200px"
            />
        </Nav>

        <Nav className="w-50 justify-content-between ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#menu">St.Patrick&apos;s Day</Nav.Link>
          <Nav.Link href="#contact">To Go Ordering</Nav.Link>
          <Nav.Link><Facebook/></Nav.Link>
          <Nav.Link><Twitter/></Nav.Link>
          <Nav.Link><Instagram/></Nav.Link>
        </Nav>
    </Container>
  </Navbar>

);

const MiddleMenu = () => (
  <Container className="row d-flex align-items-center justify-content-center" id="centerText">
      <h1>Now accepting reservations for St Patrick&apos;s Day
        Please call 808-531-0422 for reservations 
        St Patrick&apos;s Day To-Go Orders can be ordered on our website menu
      </h1>
  </Container>
);

const FooterMenu = () => (
  <Container>
  
  </Container>
);



export default function WebSite() {
    return (
        <main>
            <Container>
              <TopMenu/>
              <MiddleMenu/>
              <FooterMenu/>
            </Container>
        </main>
    );
}