import NewTaskForm from "../components/NewTaskForm";
import Mainscreen from "../components/Mainscreen";
import Header from "../components/Header";

const AddTask = ({ addTask }) => {
  return (
    <div>
      <Header></Header>
      <Mainscreen title="I could use help with...">
        <NewTaskForm addTask={addTask}></NewTaskForm>
      </Mainscreen>
    </div>
  );
};

export default AddTask;
