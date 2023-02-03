import { Button, Container, Row } from "react-bootstrap";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            {/* <h2 className="welcome-text">Welcome To</h2> */}
            <h1 classname="title">Welcome To Care Circle</h1>
            <p className="subtitle">
              A way to strengthen connections with loved ones
            </p>
          </div>
          <div className="buttonContainer">
            <a href="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </a>
            <a href="/signup">
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Sign Up
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
