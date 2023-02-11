import Mainscreen from "../components/Mainscreen";
import NewMemberForm from "../components/NewMemberForm";
import Header from "../components/Header";

const AddMember = ({ addMember, logout, inviteCode }) => {
  return (
    <div>
      <Header logout={logout} />
      <Mainscreen title="Add to My Circle">
        <NewMemberForm
          addMember={addMember}
          inviteCode={inviteCode}
        ></NewMemberForm>
      </Mainscreen>
    </div>
  );
};

export default AddMember;
