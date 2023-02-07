import NewTaskForm from "../NewTaskForm";
import Mainscreen from "../Mainscreen";

const AddTask = ({ addTask }) => {
  return (
    <Mainscreen title="I could use help with...">
      <NewTaskForm addTask={addTask}></NewTaskForm>
    </Mainscreen>
  );
};

export default AddTask;
