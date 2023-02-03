import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Task.css";
import { Button, Card, Badge } from "react-bootstrap";

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

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newTaskData = {
      ...taskFormData,
      [e.target.name]: value,
    };
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

  const [isHidden, setIsHidden] = useState(true);

  const displayClass = isHidden === true ? "hidden" : "show";

  const handleDiscardChanges = () => {
    setIsHidden(true);
    setTaskFormData(INITIAL_FORM_STATE);
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Header style={{ display: "flex" }}>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"></label>
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
          <Badge bg="warning">Due On- Jan 25</Badge>
        </h5>

        <div>
          <Button variant="primary">Edit</Button>
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
