import Mainscreen from "../Mainscreen";
import NewMemberForm from "../NewMemberForm";

const AddMember = ({ addMember }) => {
  return (
    <Mainscreen title="Add to My Circle">
      <NewMemberForm addMember={addMember}></NewMemberForm>
    </Mainscreen>
  );
};

export default AddMember;
