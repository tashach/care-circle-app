import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Task.css";
import { Button, Card, Row, Col, Form } from "react-bootstrap";

const Task = ({
  _id,
  title,
  description,
  volunteerName,
  date,
  isComplete,
  deleteTask,
  editTask,
}) => {
  const INITIAL_FORM_STATE = {
    _id: _id,
    title: title,
    description: description,
    date: date,
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
    <Card style={{ margin: 10 }} className="w-75 p-3 shadow-sm">
      <Card.Title style={{ display: "flex" }}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => handleMarkComplete(!isComplete)}
            value=""
            id="flexCheckDefault"
            style={{ cursor: "pointer" }}
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-original-title="Mark Completed"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault" />
        </div>
        <h4 className="text-primary mt-2 ">{date}</h4>
        <span
          style={{
            color: "black",
            textDecoration: "none",
            flex: 1,
            alignSelf: "center",
            fontSize: 22,
            marginLeft: 10,
          }}
        >
          {title}
        </span>
        <div>
          <Button
            size="sm"
            variant="warning"
            onClick={() => setIsHidden(!isHidden)}
          >
            Edit
          </Button>
        </div>
      </Card.Title>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "black", fontSize: 18 }}>{volunteerName}</p>
          <footer
            style={{ fontSize: 16 }}
            id="blockquote-footer"
            className="blockquote-footer"
          >
            <cite title="Source Title">{description}</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <div className={`editTaskContainer ${displayClass}`}>
        <Form style={{ margin: 10 }}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="title"
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
                placeholder="Description"
                as="textarea"
                rows={3}
                value={taskFormData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <div className="buttonContainer d-flex flew-row justify-content-end">
            <Button
              onClick={handleEditTaskSubmit}
              className="mx-2"
              variant="success"
              size="sm"
            >
              Save Changes
            </Button>
            <Button
              size="sm"
              onClick={handleDiscardChanges}
              variant="outline-secondary"
            >
              Discard Changes
            </Button>
            <Button
              size="sm"
              onClick={() => deleteTask(_id)}
              variant="danger"
              className="mx-2"
            >
              Delete
            </Button>
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
  date: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
