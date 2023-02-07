import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Member.css";
import { Button, Card } from "react-bootstrap";

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
    <Card style={{ margin: 10 }}>
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
          <Button variant="info">Edit</Button>
          <Button
            onClick={() => deleteMember(_id)}
            variant="danger"
            className="mx-2"
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
            {" "}
            <cite title="Source Title">{phone}</cite>
          </footer>
        </blockquote>
      </Card.Body>
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
