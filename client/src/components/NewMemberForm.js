import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";

const INITIAL_FORM_STATE = {
  memberFirstName: "",
  memberLastName: "",
  memberEmail: "",
  memberPhone: "",
  memberTasks: [],
};

const NewMemberForm = ({ addMember }) => {
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

  const handleNewMemberSubmit = (e) => {
    e.preventDefault();
    addMember(memberFormData);
    setMemberFormData(INITIAL_FORM_STATE);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleNewMemberSubmit}
    >
      <TextField
        required
        id="outlined-required"
        label="First Name"
        placeholder="First Name"
        defaultValue=""
        size="small"
        name="memberFirstName"
        value={memberFormData.memberFirstName}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        placeholder="Last Name"
        defaultValue=""
        size="small"
        name="memberLastName"
        value={memberFormData.memberLastName}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-textarea"
        required
        size="small"
        label="Email"
        name="memberEmail"
        placeholder="Email"
        helperText=" "
        multiline
        value={memberFormData.memberEmail}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-required"
        size="small"
        required
        label="Phone"
        name="memberPhone"
        helperText="Format 000-000-0000"
        // inputMode="numeric"
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        }}
        value={memberFormData.memberPhone}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button onClick={handleNewMemberSubmit}>Add</button>
      <button
        className="discard-button"
        helperText=" "
        type="button"
        onClick={() => setMemberFormData(INITIAL_FORM_STATE)}
      >
        Cancel
      </button>
    </Box>
  );
};

NewMemberForm.propTypes = {
  addMember: PropTypes.func.isRequired,
};

export default NewMemberForm;
