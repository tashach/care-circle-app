import Mainscreen from "../Mainscreen";
import "../styles/Mainscreen.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Member from "../Member";
import "../styles/TaskList.css";
// import { useEffect, useState } from "react";

const MyCirclePage = ({ deleteMember, editMember, memberData }) => {
  console.log(memberData);

  const memberComponents = memberData?.map((member) => {
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
    <Mainscreen title="My Circle">
      <Link to="addMember">
        <Button
          variant="info"
          className="addButton"
          size="lg"
          style={{ marginLeft: 10, marginBottom: 6 }}
        >
          + Invite Someone
        </Button>
      </Link>
      {memberComponents}
    </Mainscreen>
  );
};

export default MyCirclePage;
