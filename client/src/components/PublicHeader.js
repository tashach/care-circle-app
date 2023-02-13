import { Container, Navbar } from "react-bootstrap";
import "../styles/Header.css";

const PublicHeader = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="navLink homeLink" href="/">
          Care Circle
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default PublicHeader;
