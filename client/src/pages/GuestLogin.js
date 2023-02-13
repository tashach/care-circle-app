import Mainscreen from "../components/Mainscreen";
import PublicHeader from "../components/PublicHeader";
import "../styles/Mainscreen.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useState } from "react";
import AlertItem from "../components/AlertItem";
import { useAppContext } from "../context/AppContext";

const INITIAL_FORM_STATE = {
  inviteCode: "",
  email: "",
};

const GuestLogin = ({ loginMember }) => {
  const [values, setValues] = useState(INITIAL_FORM_STATE);
  const navigate = useNavigate();
  const { isLoading, showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const newFormData = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("calling handleFormSubmit loginMember");
    try {
      const config = { headers: { "Content-type": "application/json" } };
      const { email, inviteCode } = values;
      if (!email || !inviteCode) {
        displayAlert();
        return;
      }
      loginMember(email, inviteCode, config);
      navigate("/guestview");
    } catch (error) {
      console.log(e);
      throw new Error("whoops! something went wrong");
    }
  };

  return (
    <div>
      <PublicHeader />
      <Mainscreen title="Guest Login">
        <div className="loginContainer w-75">
          <Row>
            <Col className="text-secondary mb-3">
              Who's Care Circle will you be joining?
            </Col>
          </Row>
          <Form onSubmit={handleFormSubmit}>
            {showAlert && <AlertItem />}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Their Email</Form.Label>
                  <Form.Control
                    type="test"
                    name="email"
                    placeholder="Their Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              {/* <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col> */}
            </Row>
            <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">
              <Form.Label>Your Invite Code</Form.Label>
              <Form.Control
                type="inviteCode"
                placeholder="Invite Code"
                name="inviteCode"
                value={values.inviteCode}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Enter your email here.
              </Form.Text>
            </Form.Group> */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Mainscreen>
    </div>
  );
};

export default GuestLogin;
