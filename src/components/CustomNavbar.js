import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Logo, Span } from "./styledComponents";

const CustomNavbar = () => {
  return (
    <Navbar className="colorNav" expand="lg" sticky="top">
      <Container fluid className="mx-3 noColor">
        <Navbar.Brand href="#init" className="noColor">
          <Logo
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673662083/portfolio/Icono_tcxlaa.png"
            alt="Logo con iniciales"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end noColor"
          id="basic-navbar-nav"
        >
          <Nav className="itemsNav noColor">
            <Nav.Link href="#aboutMe" className="mx-2 noColor">
              <Span>01.</Span> Sobre mi
            </Nav.Link>
            <Nav.Link href="#experience" className="mx-2 noColor">
              <Span>02.</Span>Experiencia
            </Nav.Link>
            <Nav.Link href="#projects" className="mx-2 noColor">
              <Span>03.</Span>Proyectos
            </Nav.Link>
            <Nav.Link href="#contactMe" className="mx-2 noColor">
              <Span>04.</Span>Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
