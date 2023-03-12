import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavigationMenu = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/Movies-in-theater">Movies in theater</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <Nav.Link href="/Coming-soon">Coming soon</Nav.Link>
                    <Nav.Link href="/Top-rated-indian">Top rated indian</Nav.Link>
                    <Nav.Link href="/Top-rated-movies">Top rated movies</Nav.Link>
                    <Nav.Link href="/Favourites">Favourites</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;