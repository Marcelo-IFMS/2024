import { Container, Nav, Navbar } from "react-bootstrap";
import style from "@/styles/Navbar.module.css";
export default function Menu() {
  return (
    <Container>
      <Navbar
        expand="sm"
        className={`${style.navGradiente} px-3 my-0 border-2 border border-success rounded rounded-3`}
      >
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/noticias">Notícias</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>
            <Nav.Link href="/pages">Page</Nav.Link>
            <Nav.Link href="/mesportes">P.Esportes</Nav.Link>
            <Nav.Link href="/cardesportes">C.Esportes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
