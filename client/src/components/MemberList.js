import Member from "./Member";
import PropTypes from "prop-types";

const MemberList = ({ memberData, deleteMember, editMember }) => {
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

  return <ul>{memberComponents}</ul>;
};

MemberList.propTypes = {
  memberData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      memberFirstName: PropTypes.string.isRequired,
      memberLastName: PropTypes.string.isRequired,
      memberEmail: PropTypes.string.isRequired,
      memberPhone: PropTypes.string.isRequired,
    })
  ),
  deleteMember: PropTypes.func.isRequired,
  editMember: PropTypes.func.isRequired,
};

export default MemberList;
