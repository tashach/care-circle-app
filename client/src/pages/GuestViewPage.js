import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-bootstrap";
import GuestTask from "../components/GuestTask";
import "../styles/TaskList.css";

const GuestViewPage = ({ taskData, userName, editTask }) => {
  console.log(taskData);

  const [isHidden, setIsHidden] = useState(true);
  const displayClass = isHidden === true ? "hidden" : "show";

  const taskComponents = taskData?.map((task) => {
    if (!task.isComplete) {
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
    <Mainscreen title={`You are viewing ${userName}'s Care Circle`}>
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
      </div>
    </Mainscreen>
  );
};

export default GuestViewPage;
