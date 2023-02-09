import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState } from "react";

const GuestLogin = ({ loginUser, loggedIn }) => {
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("calling handleFormSubmit login");
    try {
      const config = { headers: { "Content-type": "application/json" } };
      loginUser(email, inviteCode, config);
      navigate("/mytasks");
    } catch (error) {
      console.log(e);
      throw new Error("whoops! something went wrong");
    }
  };

  return (
    <Mainscreen title="Guest Login">
      <div className="loginContainer">
        <Row>
          <Col className="text-muted mb-3">
            Invited to join someone's Care Circle? Enter their name and your
            invite code here.
          </Col>
        </Row>
        <Form onSubmit={handleFormSubmit}>
          <Row>
            {/* <Form.Text className="text-muted">Enter your email here.</Form.Text> */}
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="test"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Invite Code</Form.Label>
            <Form.Control
              type="inviteCode"
              placeholder="Invite Code"
              name="inviteCode"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">Enter your email here.</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Mainscreen>
  );
};

export default GuestLogin;
