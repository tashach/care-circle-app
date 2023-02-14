import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Task from "../components/Task";
import CompletedTask from "../components/CompletedTask";
import Header from "../components/Header";
import { useAppContext } from "../context/AppContext";
import "../styles/TaskList.css";

const MyTasks = ({ editTask }) => {
  const [isHidden, setIsHidden] = useState(true);
  const displayClass = isHidden === true ? "hidden" : "show";
  const { user, tasks } = useAppContext();

  const taskComponents = tasks?.map((task) => {
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
            editTask={editTask}
          />
        </li>
      );
    }
  });

  const completedTaskComponents = tasks?.map((task) => {
    if (task.isComplete) {
      return (
        <li key={task._id}>
          <CompletedTask
            _id={task._id}
            title={task.title}
            description={task.description}
            volunteerName={task.volunteerName}
            isComplete={task.isComplete}
            editTask={editTask}
          />
        </li>
      );
    }
  });
  return (
    <div>
      <Header />
      <Mainscreen title={`Welcome Back, ${user.firstName}!`}>
        <Link to="/addtask">
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
        <div className={displayClass}>
          <p className="mx-2"></p>
          {completedTaskComponents}
        </div>
      </Mainscreen>
    </div>
  );
};

export default MyTasks;
