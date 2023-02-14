import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/Header.css";

const GuestHeader = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAppContext();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("calling handleLogout");
    logoutUser();
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
