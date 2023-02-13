import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const GuestHeader = ({ logout }) => {
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
            <Nav.Link className="navLink" href="/" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GuestHeader;

GuestHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};
