import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col id="footer" className="text-center py-3">
          Copyright &copy; Care Circle
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
