import { Button, Container, Row } from "react-bootstrap";
import PublicHeader from "../components/PublicHeader";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <PublicHeader />
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <h2 className="title">Welcome To</h2>
              <h1 className="title">Care Circle</h1>
              <p className="subtitle">
                A way to strengthen connections with loved ones
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button className="landingbutton">Login</Button>
              </a>
              <a href="/guestlogin">
                <Button className="landingbutton" variant="secondary">
                  Login as Guest
                </Button>
              </a>
              <a href="/signup">
                <Button className="landingbutton" variant="outline-primary">
                  Sign Up
                </Button>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
