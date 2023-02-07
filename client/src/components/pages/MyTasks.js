import Mainscreen from "../Mainscreen";
import "../styles/Mainscreen.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Task from "../Task";
import CompletedTask from "../CompletedTask";
import "../styles/TaskList.css";

const MyTasks = ({ deleteTask, editTask, taskData, userName }) => {
  console.log(taskData);

  const [isHidden, setIsHidden] = useState(true);
  const displayClass = isHidden === true ? "hidden" : "show";

  const taskComponents = taskData?.map((task) => {
    if (!task.isComplete) {
      return (
        <li key={task._id}>
          <Task
            _id={task._id}
            title={task.title}
            description={task.description}
            volunteerName={task.volunteerName}
            date={task.date}
            isComplete={task.isComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </li>
      );
    }
  });

  const completedTaskComponents = taskData?.map((task) => {
    if (task.isComplete) {
      return (
        <li key={task._id}>
          <CompletedTask
            _id={task._id}
            title={task.title}
            description={task.description}
            volunteerName={task.volunteerName}
            isComplete={task.isComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </li>
      );
    }
  });
  return (
    <Mainscreen title={`Welcome Back, ${userName}!`}>
      <Link to="/addTask">
        <Button
          variant="info"
          className="addButton"
          style={{ marginLeft: 10, marginBottom: 6 }}
        >
          + Add New Item
        </Button>
      </Link>
      <Form className="mx-3 my-3">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Show Completed"
          onClick={() => setIsHidden(!isHidden)}
        />
      </Form>
      {taskComponents}
      <container className={displayClass}>
        <p className="mx-2">Completed</p>
        {completedTaskComponents}
      </container>
    </Mainscreen>
  );
};

export default MyTasks;
