import Mainscreen from "../components/Mainscreen";
import PublicHeader from "../components/PublicHeader";
import "../styles/Mainscreen.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState } from "react";
import AlertItem from "../components/AlertItem";
import { useAppContext } from "../context/AppContext";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};
const Login = ({ loginUser }) => {
  const [values, setValues] = useState(INITIAL_FORM_STATE);

  const { isLoading, showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const newFormData = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newFormData);
  };
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("calling handleFormSubmit login");
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    console.log(values);
    const currentUser = { email, password };
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
    <div>
      <PublicHeader />
      <Mainscreen title="LOGIN">
        <div className="loginContainer w-50">
          <Form onSubmit={handleFormSubmit}>
            {showAlert && <AlertItem />}
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

            <Button variant="primary" type="submit" disabled={isLoading}>
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
    </div>
  );
};

export default Login;
