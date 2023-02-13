import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ logout }) => {
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
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-10">
            <Nav.Link className="navLink" href="/mytasks">
              My Items
            </Nav.Link>
            <Nav.Link className="navLink" href="/mycircle">
              My Circle
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addtask">Add Item</NavDropdown.Item>
              <NavDropdown.Item href="/addmember">Add Member</NavDropdown.Item>
              <NavDropdown.Item href="/guestview">Guest View</NavDropdown.Item>
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

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
