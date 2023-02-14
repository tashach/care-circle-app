import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import AlertItem from "../components/AlertItem";
import { useAppContext } from "../context/AppContext";

const INITIAL_FORM_STATE = {
  title: "",
  description: "",
  volunteerName: "",
  date: "",
};

const NewTaskForm = () => {
  const navigate = useNavigate();
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_STATE);
  const { displayAlert, showAlert, addTask } = useAppContext();

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newTaskData = {
      ...taskFormData,
      [e.target.name]: value,
    };
    setTaskFormData(newTaskData);
  };

  const handleCancel = () => {
    setTaskFormData(INITIAL_FORM_STATE);
    navigate("/mytasks");
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    console.log("calling addTask");
    if (!taskFormData.title) {
      displayAlert();
      return;
    }
    addTask(taskFormData);
    setTaskFormData(INITIAL_FORM_STATE);
    setTimeout(() => {
      navigate("/mytasks");
    }, 2000);
  };

  return (
    <div className={`addTaskContainer w-75`}>
      <Form>
        {showAlert && <AlertItem />}
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

export default NewTaskForm;
