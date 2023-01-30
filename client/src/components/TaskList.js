import Task from "./Task";
import PropTypes from "prop-types";
import "./styles/TaskList.css";

const TaskList = ({ taskData, deleteTask, editTask }) => {
  const taskComponents = taskData?.map((task) => {
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
  });

  return <ul>{taskComponents}</ul>;
};

TaskList.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      volunteerName: PropTypes.string,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskList;
