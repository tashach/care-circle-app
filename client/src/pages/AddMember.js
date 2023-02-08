import Mainscreen from "../components/Mainscreen";
import NewMemberForm from "../components/NewMemberForm";

const AddMember = ({ addMember }) => {
  return (
    <Mainscreen title="Add to My Circle">
      <NewMemberForm addMember={addMember}></NewMemberForm>
    </Mainscreen>
  );
};

export default AddMember;
