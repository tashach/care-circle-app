import NewTaskForm from "../components/NewTaskForm";
import Mainscreen from "../components/Mainscreen";
import Header from "../components/Header";

const AddTask = () => {
  return (
    <div>
      <Header />
      <Mainscreen title="I could use help with...">
        <NewTaskForm></NewTaskForm>
      </Mainscreen>
    </div>
  );
};

export default AddTask;
