import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Logo } from "./styledComponents";

const CustomNavbar = () => {
  return (
    <Navbar className="colorNav" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Logo
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673662083/portfolio/Icono_tcxlaa.png"
            alt="Logo con iniciales"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="itemsNav">
            <Nav.Link href="#aboutMe" className="mx-2">
              Sobre mi
            </Nav.Link>
            <Nav.Link href="#experience" className="mx-2">
              Experiencia
            </Nav.Link>
            <Nav.Link href="#projects" className="mx-2">
              Proyectos
            </Nav.Link>
            <Nav.Link href="#contactMe" className="mx-2">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
