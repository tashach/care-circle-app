import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import PublicHeader from "../components/PublicHeader";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState, useEffect } from "react";
import AlertItem from "../components/AlertItem";
import { useAppContext } from "../context/AppContext";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(INITIAL_FORM_STATE);
  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const newFormData = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("calling submit form");
    const { firstName, lastName, email, password, confirmPassword } = values;
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      password !== confirmPassword
    ) {
      displayAlert();
      return;
    }
    const currentUser = { email, password, firstName, lastName };
    registerUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/addTask");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div>
      <PublicHeader />
      <Mainscreen title="SIGN UP">
        <div className="loginContainer w-75">
          <Form onSubmit={onSubmit}>
            {showAlert && <AlertItem />}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
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
                    name="lastName"
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
                    name="email"
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
                    name="password"
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
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
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
    </div>
  );
};

export default SignUpPage;
