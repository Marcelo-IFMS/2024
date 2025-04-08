
import { Container, Nav, Navbar } from 'react-bootstrap';
//https://www.youtube.com/watch?v=B0vZGTGgIdc
export default function NavBar() {
    return (
        <Container>
            <Navbar expand="sm" className="rounded navbar bg-dark navbar-dark px-3 gradient-custom">
                <Navbar.Brand href="/">6</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/lista">Lista</Nav.Link>
                        <Nav.Link href="/produtos">Produtos</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                        <Nav.Link href="/users">Usuários</Nav.Link>
                        <Nav.Link href="/produtoscard">ProdutosCard</Nav.Link>
                        <Nav.Link href="/pages">Pages</Nav.Link>
                        <Nav.Link href="/pages2">Pages2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}