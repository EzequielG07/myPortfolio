import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

const CustomNavbar = () => {
  return (
    <Navbar className="prueba" expand="lg">
      <Container>
        <Navbar.Brand href="#home">EzequielG07</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-flex justify-content-end"
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav className="mx-2">Sobre mi</Nav>
            <Nav className="mx-2">Experiencia</Nav>
            <Nav className="mx-2">Proyectos</Nav>
            <Nav className="mx-2">Contacto</Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
