import Mainscreen from "../components/Mainscreen";
import NewMemberForm from "../components/NewMemberForm";
import Header from "../components/Header";
import { useAppContext } from "../context/AppContext";

const AddMember = ({ addMember }) => {
  const { user } = useAppContext();
  return (
    <div>
      <Header />
      <Mainscreen title="Add to My Circle">
        <NewMemberForm
          addMember={addMember}
          inviteCode={user.inviteCode}
        ></NewMemberForm>
      </Mainscreen>
    </div>
  );
};

export default AddMember;
