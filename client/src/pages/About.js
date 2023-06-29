import { Button, Container, Row } from "react-bootstrap";
import PublicHeader from "../components/PublicHeader";
import "../styles/LandingPage.css";

const AboutPage = () => {
  return (
    <div>
      <PublicHeader />
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <p className="subtitle">
                Care Circle is way to gather your community in times of need.
                You can let members of your circle how they can care for you,
                and they can sign up as they need.
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/">
                <Button className="landingbutton">Back To Home</Button>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
