import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import GuestTask from "../components/GuestTask";
import GuestHeader from "../components/GuestHeader";
import "../styles/TaskList.css";

const GuestViewPage = ({ taskData, userName, editTask, logout }) => {
  console.log(taskData);

  const [isHidden, setIsHidden] = useState(false);
  const displayClass = isHidden === false ? "hidden" : "show";

  const taskComponents = taskData?.map((task) => {
    if (!task.isComplete && !task.volunteerName) {
      return (
        <li key={task._id}>
          <GuestTask
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

  const claimedTaskComponents = taskData?.map((task) => {
    if (!task.isComplete && task.volunteerName) {
      return (
        <li key={task._id}>
          <GuestTask
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

  return (
    <div>
      <GuestHeader logout={logout}></GuestHeader>
      <Mainscreen title={`You are viewing ${userName}'s Circle`}>
        <Form className="mx-3 my-3">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show All"
            onClick={() => setIsHidden(!isHidden)}
          />
        </Form>
        <h4 className="mx-3 mt-5 my-3">{userName} could use help with...</h4>
        {taskComponents}
        <div className={displayClass}>{claimedTaskComponents}</div>
      </Mainscreen>
    </div>
  );
};

export default GuestViewPage;
