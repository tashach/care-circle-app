import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Member.css";
import { Button, Card, Form, Row, Col } from "react-bootstrap";

const Member = ({
  _id,
  firstName,
  lastName,
  email,
  phone,
  deleteMember,
  editMember,
}) => {
  const INITIAL_FORM_STATE = {
    _id: _id,
    memberFirstName: firstName,
    memberLastName: lastName,
    memberEmail: email,
    memberPhone: phone,
    memberTasks: [],
  };
  const [memberFormData, setMemberFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newMemberData = {
      ...memberFormData,
      [e.target.name]: value,
    };
    setMemberFormData(newMemberData);
  };

  const handleEditMemberSubmit = (e) => {
    e.preventDefault();
    setIsHidden(true);
    editMember(memberFormData);
  };

  const [isHidden, setIsHidden] = useState(true);

  const displayClass = isHidden === true ? "hidden" : "show";

  const handleDiscardChanges = () => {
    setIsHidden(true);
    setMemberFormData(INITIAL_FORM_STATE);
  };

  return (
    <Card style={{ margin: 10 }} className="w-75">
      <Card.Header style={{ display: "flex" }}>
        <span
          style={{
            color: "black",
            textDecoration: "none",
            flex: 1,
            cursor: "pointer",
            alignSelf: "center",
            fontSize: 22,
            marginLeft: 10,
          }}
        >
          {firstName} {lastName}
        </span>
        <div>
          <Button
            size="sm"
            variant="info"
            onClick={() => setIsHidden(!isHidden)}
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteMember(_id)}
            variant="danger"
            className="mx-2"
            size="sm"
          >
            Remove
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ marginLeft: 10 }}>
          <p style={{ color: "black", fontSize: 18 }}>{email}</p>
          <footer
            style={{ fontSize: 16 }}
            id="blockquote-footer"
            className="blockquote-footer"
          >
            <cite title="Source Title">{phone}</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <div className={`editMemberkContainer ${displayClass}`}>
        <Form style={{ margin: 10 }}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="memberFirstName"
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
            <Col>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="memberEmail"
                  placeholder="email"
                  value={memberFormData.memberEmail}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
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
          <Row className="buttonContainer">
            <Col className="d-flex justify-content-end">
              <Button
                onClick={handleEditMemberSubmit}
                variant="success"
                className="mx-2"
                size="sm"
              >
                Save Changes
              </Button>
              <Button
                size="sm"
                onClick={handleDiscardChanges}
                variant="outline-danger"
              >
                Discard Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
  );
};

Member.propTypes = {
  _id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteMember: PropTypes.func.isRequired,
};

export default Member;
