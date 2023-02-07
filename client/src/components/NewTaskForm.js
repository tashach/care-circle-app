import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const INITIAL_FORM_STATE = {
  title: "",
  description: "",
  volunteerName: "",
  date: "",
};

const NewTaskForm = ({ addTask }) => {
  const navigate = useNavigate();
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newTaskData = {
      ...taskFormData,
      [e.target.name]: value,
    };
    setTaskFormData(newTaskData);
  };

  const handleCancel = (e) => {
    setTaskFormData(INITIAL_FORM_STATE);
    navigate("/mytasks");
  };

  const handleNewTaskSubmit = (e) => {
    if (taskFormData.title === "") {
      console.log("missing required information");
    } else {
      e.preventDefault();
      setTaskFormData(INITIAL_FORM_STATE);
      navigate("/mytasks");
    }
  };
  return (
    <div className={`addTaskContainer`}>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                value={taskFormData.title}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="volunteerName">
              <Form.Label>Circle Member</Form.Label>
              <Form.Control
                type="text"
                name="volunteerName"
                placeholder="Circle Member"
                value={taskFormData.volunteerName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Due Date"
                value={taskFormData.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              as="textarea"
              rows={3}
              placeholder="Description"
              value={taskFormData.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <div className="buttonContainer">
          <Button onClick={handleNewTaskSubmit} variant="success">
            Save New Task
          </Button>
          <Button onClick={handleCancel} variant="outline-danger">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
