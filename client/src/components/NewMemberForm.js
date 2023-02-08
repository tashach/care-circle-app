import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

const INITIAL_FORM_STATE = {
  memberFirstName: "",
  memberLastName: "",
  memberEmail: "",
  memberPhone: "",
  memberTasks: [],
};

const NewMemberForm = ({ addMember }) => {
  const [memberFormData, setMemberFormData] = useState(INITIAL_FORM_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newMemberData = {
      ...memberFormData,
      [e.target.name]: value,
    };
    setMemberFormData(newMemberData);
  };

  const handleNewMemberSubmit = (e) => {
    e.preventDefault();
    addMember(memberFormData);
    setMemberFormData(INITIAL_FORM_STATE);
    navigate("/mycircle");
  };

  const handleCancel = (e) => {
    setMemberFormData(INITIAL_FORM_STATE);
    navigate("/mycircle");
  };

  const invite =
    "LINK: https://care-circle-app.herokuapp.com \nINVITE CODE: TEST@1555";

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="memberFirstName"
                placeholder="First Name"
                value={memberFormData.memberFirstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="memberLastName"
                placeholder="Last Name"
                value={memberFormData.memberLastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="memberEmail"
                placeholder="Email"
                value={memberFormData.memberEmail}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                name="memberPhone"
                placeholder="Phone"
                value={memberFormData.memberPhone}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              To invite someone to your circle, send them the link and invite
              code. They should be good to go from there!{" "}
            </p>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Link and Invite Code</Card.Title>
                <Card.Text className="text-secondary">
                  LINK: https://care-circle-app.herokuapp.com
                </Card.Text>
                <Card.Text className="text-secondary">
                  INVITE CODE: TEST@1555
                </Card.Text>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(invite);
                  }}
                >
                  Copy
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Button onClick={handleNewMemberSubmit} variant="success">
              Save
            </Button>
            <Button
              onClick={handleCancel}
              className="mx-2"
              variant="outline-danger"
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

NewMemberForm.propTypes = {
  addMember: PropTypes.func.isRequired,
};

export default NewMemberForm;
