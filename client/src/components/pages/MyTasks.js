import Mainscreen from "../Mainscreen";
import "../styles/Mainscreen.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Task from "../Task";
import "../styles/TaskList.css";

const MyTasks = ({ deleteTask, editTask, taskData, userName }) => {
  console.log(taskData);

  const taskComponents = taskData?.map((task) => {
    if (!task.isComplete) {
      return (
        <li key={task._id}>
          <Task
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
          size="lg"
          style={{ marginLeft: 10, marginBottom: 6 }}
        >
          + Add New Task
        </Button>
      </Link>
      {taskComponents}
    </Mainscreen>
  );
};

export default MyTasks;
