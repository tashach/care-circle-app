import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Care Circle</h1>
              <p className="subtitle">
                A Way to Strengthen Connections with Loved Ones
              </p>
            </div>
            <div className="button-container">
              <a href="/login">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Login
                </Button>
              </a>
              <a href="/register" size="lg" className="landingbutton">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
