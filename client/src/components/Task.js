import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Task.css";
import { Button, Card, Badge, Row, Col, Form } from "react-bootstrap";

const Task = ({
  _id,
  title,
  description,
  volunteerName,
  isComplete,
  deleteTask,
  editTask,
}) => {
  const INITIAL_FORM_STATE = {
    _id: _id,
    title: title,
    description: description,
    volunteerName: volunteerName,
    isComplete: isComplete,
  };
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_STATE);
  const [isHidden, setIsHidden] = useState(true);
  const displayClass = isHidden === true ? "hidden" : "show";

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newTaskData = {
      ...taskFormData,
      [e.target.name]: value,
    };
    console.log(newTaskData);
    setTaskFormData(newTaskData);
  };

  const handleEditTaskSubmit = (e) => {
    e.preventDefault();
    setIsHidden(true);
    editTask(taskFormData);
  };

  const handleMarkComplete = (completeStatus) => {
    console.log("Mark Complete Called");
    const newTaskData = {
      ...taskFormData,
      isComplete: completeStatus,
    };
    setTaskFormData(newTaskData);
    editTask(newTaskData);
  };

  const handleDiscardChanges = () => {
    setIsHidden(true);
    setTaskFormData(INITIAL_FORM_STATE);
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Header style={{ display: "flex" }}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => handleMarkComplete(!isComplete)}
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          ></label>
        </div>
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
          {title}
        </span>
        <h5>
          <Badge bg="warning">Jan 25</Badge>
        </h5>

        <div>
          <Button variant="primary" onClick={() => setIsHidden(!isHidden)}>
            Edit
          </Button>
          <Button
            onClick={() => deleteTask(_id)}
            variant="danger"
            className="mx-2"
          >
            Delete
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "black", fontSize: 18 }}>{description}</p>
          <footer
            style={{ fontSize: 16 }}
            id="blockquote-footer"
            className="blockquote-footer"
          >
            Circle Member: <cite title="Source Title">{volunteerName}</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <div className={`editTaskContainer ${displayClass}`}>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
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
            {/* <Col>
              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="text"
                  name="volunteerName"
                  placeholder="Due Date"
                  value={taskFormData.volunteerName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Description"
                value={taskFormData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <div className="buttonContainer">
            <Button onClick={handleEditTaskSubmit}>Save Changes</Button>
            <Button onClick={handleDiscardChanges}>Discard Changes</Button>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default Task;

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  volunteerName: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
