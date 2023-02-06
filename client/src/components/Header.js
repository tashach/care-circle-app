import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Header.css";

const Header = ({ userName, logout, loggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("calling handleLogout");
    logout();
    navigate("/");
  };
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="navLink homeLink" href="/">
          Care Circle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="navLink" href="/mytasks">
              Tasks
            </Nav.Link>
            <Nav.Link className="navLink" href="/mycircle">
              My Circle
            </Nav.Link>
            <NavDropdown title={`${userName}`} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
