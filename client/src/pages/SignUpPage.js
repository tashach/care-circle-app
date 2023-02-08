import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState, useEffect } from "react";
import AlertItem from "../components/AlertItem";
import PropTypes from "prop-types";

const SignUpPage = ({ createUser }) => {
  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showAlert: false,
  };
  const [values, setValues] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newFormData = {
      ...values,
      [e.target.name]: value,
    };
    setValues(newFormData);
  };

  const [message, setMessage] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    if (values.password !== values.confirmPassword) {
      setIsHidden(false);
      setMessage("Passwords do not match");
    } else {
      e.preventDefault();
      console.log("calling onSubmit signup");
      try {
        const config = { headers: { "Content-type": "application/json" } };
        createUser(
          values.firstName,
          values.lastName,
          values.email,
          values.password,
          config
        );
        setIsHidden(false);
        setMessage("Successfully Created User");
        navigate("/mytasks");
      } catch (error) {
        setIsHidden(false);
        setMessage(error);
      }
    }
  };

  return (
    <Mainscreen title="SIGN UP">
      <div className="loginContainer">
        <Form onSubmit={onSubmit}>
          {values.showAlert && <AlertItem />}
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={values.lastName}
                  onChange={handleChange}
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
                  value={values.email}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
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

SignUpPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};
