import { Container, Navbar, Nav } from "react-bootstrap";
import "../styles/Header.css";

const PublicHeader = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="navLink homeLink" href="/">
          Care Circle
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-10">
            <Nav.Link className="navLink" href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PublicHeader;
