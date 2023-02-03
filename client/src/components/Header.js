import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Care Circle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Tasks</Nav.Link>
            <Nav.Link href="#link">My Circle</Nav.Link>
            <NavDropdown title="<User Name>" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
