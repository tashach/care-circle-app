import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Task.css";
import { Button, Card, Row, Col, Form } from "react-bootstrap";

const GuestTask = ({
  _id,
  title,
  description,
  volunteerName,
  date,
  isComplete,
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
          <Button variant="warning" onClick={() => setIsHidden(!isHidden)}>
            I can help with this!
          </Button>
        </div>
      </Card.Title>
      <Card.Body className="d-flex">
        <Col>
          {" "}
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
        </Col>
        <Col>
          <div className={`editTaskContainer ${displayClass}`}>
            <Form style={{ margin: 10 }}>
              <Row>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="volunteerName"
                    placeholder="Your Name Here"
                    value={taskFormData.volunteerName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row>
                <div className="buttonContainer d-flex flew-row justify-content-end">
                  <Button
                    onClick={handleEditTaskSubmit}
                    className="mx-2"
                    variant="success"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleDiscardChanges}
                    variant="outline-secondary"
                  >
                    Cancel
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default GuestTask;

GuestTask.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  volunteerName: PropTypes.string,
  date: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
};
