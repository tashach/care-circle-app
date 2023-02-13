import NewTaskForm from "../components/NewTaskForm";
import Mainscreen from "../components/Mainscreen";
import Header from "../components/Header";

const AddTask = ({ addTask, logout }) => {
  return (
    <div>
      <Header logout={logout}></Header>
      <Mainscreen title="I could use help with...">
        <NewTaskForm addTask={addTask}></NewTaskForm>
      </Mainscreen>
    </div>
  );
};

export default AddTask;
