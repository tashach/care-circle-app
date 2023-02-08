import NewTaskForm from "../components/NewTaskForm";
import Mainscreen from "../components/Mainscreen";

const AddTask = ({ addTask }) => {
  return (
    <Mainscreen title="I could use help with...">
      <NewTaskForm addTask={addTask}></NewTaskForm>
    </Mainscreen>
  );
};

export default AddTask;
