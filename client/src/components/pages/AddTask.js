import NewTaskForm from "../NewTaskForm";
import Mainscreen from "../Mainscreen";

const AddTask = ({ addTask }) => {
  return (
    <Mainscreen title="Add a New Task">
      <NewTaskForm addTask={addTask}></NewTaskForm>
    </Mainscreen>
  );
};

export default AddTask;
