import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";


function NavBar() {
  return (
    <Navbar expand="lg" className="NavBar rounded w-100" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">Pets App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pet Status</Nav.Link>
            <Nav.Link href="#link">Pet Properties</Nav.Link>
            <Nav.Link href="#link">Create An New Pet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;