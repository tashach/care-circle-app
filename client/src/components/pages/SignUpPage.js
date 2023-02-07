import Mainscreen from "../Mainscreen";
import "../styles/Mainscreen.css";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState } from "react";

const SignUpPage = ({ createUser, loggedIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [alertVariant, setAlertVariant] = useState("");

  const displayClass = isHidden === true ? "hidden" : "show";

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    if (password !== confirmPassword) {
      setIsHidden(false);
      setAlertVariant("danger");
      setMessage("Passwords do not match");
    } else {
      e.preventDefault();
      console.log("calling handleFormSubmit signup");
      try {
        const config = { headers: { "Content-type": "application/json" } };
        createUser(firstName, lastName, email, password, config);
        setIsHidden(false);
        setAlertVariant("success");
        setMessage("Successfully Created User");
        navigate("/mytasks");
      } catch (error) {
        setIsHidden(false);
        setAlertVariant("danger");
        setMessage(error);
      }
    }
  };

  return (
    <Mainscreen title="SIGN UP">
      <div className="loginContainer">
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
        <Row className={`py-3, ${displayClass}`}>
          <Alert variant={alertVariant}>{message} </Alert>
        </Row>
        <Row className="py-3">
          <Col>
            Have an account? <Link to="/login">Login Here</Link>
          </Col>
        </Row>
      </div>
    </Mainscreen>
  );
};

export default SignUpPage;
