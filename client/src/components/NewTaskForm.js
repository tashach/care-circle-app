import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const INITIAL_FORM_STATE = {
  title: "",
  description: "",
};

const NewTaskForm = ({ addTask }) => {
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_STATE);
  const [errorStatus, changeErrorStatus] = useState("");

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newTaskData = {
      ...taskFormData,
      [e.target.name]: value,
    };
    setTaskFormData(newTaskData);
  };

  const handleCancel = (e) => {
    setTaskFormData(INITIAL_FORM_STATE);
    changeErrorStatus("");
  };

  const handleNewTaskSubmit = (e) => {
    if (taskFormData.title === "") {
      changeErrorStatus("Error: Missing Required Information");
    } else {
      e.preventDefault();
      taskFormData.title === ""
        ? changeErrorStatus("Error: Missing Required Information")
        : addTask(taskFormData);
      changeErrorStatus("Successfully added task");
      setTaskFormData(INITIAL_FORM_STATE);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleNewTaskSubmit}
    >
      <TextField
        required
        id="outlined-required"
        size="small"
        label="Title"
        // placeholder="Title"
        defaultValue=""
        name="title"
        value={taskFormData.title}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-textarea"
        size="small"
        label="Description"
        // placeholder="Write Description Here"
        multiline
        value={taskFormData.description}
        name="description"
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Stack spacing={2} direction="row">
        <Button size="small" variant="contained" onClick={handleNewTaskSubmit}>
          Add Task
        </Button>
        <Button size="small" variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </Stack>
      <p>{errorStatus}</p>
    </Box>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
