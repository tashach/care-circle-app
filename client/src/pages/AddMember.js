import Mainscreen from "../components/Mainscreen";
import NewMemberForm from "../components/NewMemberForm";
import Header from "../components/Header";

const AddMember = ({ addMember, logout }) => {
  return (
    <div>
      <Header logout={logout} />
      <Mainscreen title="Add to My Circle">
        <NewMemberForm addMember={addMember}></NewMemberForm>
      </Mainscreen>
    </div>
  );
};

export default AddMember;
