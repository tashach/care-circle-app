import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Member.css";

const Member = ({
  _id,
  firstName,
  lastName,
  email,
  phone,
  deleteMember,
  editMember,
}) => {
  const INITIAL_FORM_STATE = {
    _id: _id,
    memberFirstName: firstName,
    memberLastName: lastName,
    memberEmail: email,
    memberPhone: phone,
    memberTasks: [],
  };
  const [memberFormData, setMemberFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newMemberData = {
      ...memberFormData,
      [e.target.name]: value,
    };
    setMemberFormData(newMemberData);
  };

  const handleEditMemberSubmit = (e) => {
    e.preventDefault();
    setIsHidden(true);
    editMember(memberFormData);
  };

  const [isHidden, setIsHidden] = useState(true);

  const displayClass = isHidden === true ? "hidden" : "show";

  const handleDiscardChanges = () => {
    setIsHidden(true);
    setMemberFormData(INITIAL_FORM_STATE);
  };

  return (
    <div className="member-container">
      <div className="upper-container">
        <div className="title-description" key={_id}>
          <h3>
            {firstName} {lastName}
          </h3>
          <p>
            {email} {phone}
          </p>
        </div>

        <div className="button-container">
          <button
            className="edit-button"
            onClick={() => setIsHidden(!isHidden)}
          >
            Edit Info
          </button>
        </div>
      </div>

      <div className={`lower-container, ${displayClass}`}>
        <h3>Edit Member Info</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleEditMemberSubmit}
        >
          <TextField
            required
            id="outlined-required"
            label="First Name"
            placeholder="First Name"
            defaultValue=""
            name="memberFirstName"
            value={memberFormData.memberFirstName}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Email"
            name="memberEmail"
            placeholder="Email"
            multiline
            value={memberFormData.memberEmail}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-category"
            label="Phone"
            name="memberPhone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={memberFormData.memberPhone}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Stack spacing={2} direction="row">
            <Button value="Save" size="small" onClick={handleEditMemberSubmit}>
              Save Changes
            </Button>
            <Button
              size="small"
              className="discard-button"
              type="button"
              onClick={handleDiscardChanges}
            >
              Discard Changes
            </Button>
            <Button
              size="small"
              className="delete-button"
              onClick={() => deleteMember(_id)}
            >
              Remove From My Circle
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

Member.propTypes = {
  _id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteMember: PropTypes.func.isRequired,
};

export default Member;
