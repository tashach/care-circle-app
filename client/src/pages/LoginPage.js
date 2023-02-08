import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState } from "react";

const Login = ({ loginUser, loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("calling handleFormSubmit login");
    try {
      const config = { headers: { "Content-type": "application/json" } };
      loginUser(email, password, config);
      navigate("/mytasks");
    } catch (error) {
      console.log(e);
      throw new Error("whoops! something went wrong");
    }
  };

  return (
    <Mainscreen title="LOGIN">
      <div className="loginContainer">
        <Form onSubmit={handleFormSubmit}>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Don't have an account? <Link to="/signup">Sign Up Here</Link>
          </Col>
        </Row>
      </div>
    </Mainscreen>
  );
};

export default Login;
