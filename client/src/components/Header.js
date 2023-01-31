import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/bootstrap.css";

const Header = () => {
  return (
    <Navbar bg="info" expand="lg" variant="navbar-light">
      <Container>
        <Navbar.Brand className="navbar-brand" to="/">
          Care Circle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Tasha Chang" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
