import Mainscreen from "../components/Mainscreen";
import "../styles/Mainscreen.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Member from "../components/Member";
import Header from "../components/Header";
import "../styles/TaskList.css";
import { useAppContext } from "../context/AppContext";

const MyCirclePage = ({ deleteMember, editMember, memberData, logout }) => {
  console.log(memberData);
  const { user } = useAppContext();

  const memberComponents = user.circle?.map((member) => {
    return (
      <li key={member._id}>
        <Member
          _id={member._id}
          firstName={member.memberFirstName}
          lastName={member.memberLastName}
          email={member.memberEmail}
          phone={member.memberPhone}
          deleteMember={deleteMember}
          editMember={editMember}
        />
      </li>
    );
  });
  return (
    <div>
      <Header logout={logout} />
      <Mainscreen title="My Circle">
        <Link to="/addmember">
          <Button
            variant="info"
            className="addButton"
            style={{ marginLeft: 10, marginBottom: 6 }}
          >
            + Invite Someone
          </Button>
        </Link>
        {memberComponents}
      </Mainscreen>
    </div>
  );
};

export default MyCirclePage;
