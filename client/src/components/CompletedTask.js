import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Task.css";
import { Button, Card, Badge } from "react-bootstrap";

const CompletedTask = ({
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
    volunteerName: volunteerName,
    isComplete: isComplete,
  };
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_STATE);

  const handleMarkComplete = (completeStatus) => {
    console.log("Mark Complete Called");
    const newTaskData = {
      ...taskFormData,
      isComplete: completeStatus,
    };
    setTaskFormData(newTaskData);
    editTask(newTaskData);
  };

  return (
    <Card bg="secondary-disabled" style={{ margin: 10 }} className="w-75">
      <Card.Header style={{ display: "flex" }}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => handleMarkComplete(!isComplete)}
            value=""
            checked="checked"
            id="flexCheckChecked"
            style={{ cursor: "pointer" }}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault" />
        </div>
        <span
          style={{
            textDecoration: "none",
            flex: 1,
            alignSelf: "center",
            fontSize: 22,
            marginLeft: 10,
          }}
        >
          <Badge className="mx-2" bg="warning">
            {date}
          </Badge>
          {title}
        </span>

        <div>
          <Button variant="primary" disabled>
            Edit
          </Button>
        </div>
      </Card.Header>
    </Card>
  );
};

export default CompletedTask;

CompletedTask.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
  volunteerName: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired,
};
