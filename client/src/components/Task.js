import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Task.css";
import { Button, Card, Accordion, Badge } from "react-bootstrap";
import { Checkbox } from "@mui/material";

const Task = ({
  _id,
  title,
  description,
  volunteerName,
  isComplete,
  deleteTask,
  editTask,
}) => {
  const INITIAL_FORM_STATE = {
    _id: _id,
    title: title,
    description: description,
    volunteerName: volunteerName,
    isComplete: isComplete,
  };
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    console.log("Handle Change Called");
    const value = e.target.value;
    const newTaskData = {
      ...taskFormData,
      [e.target.name]: value,
    };
    setTaskFormData(newTaskData);
  };

  const handleEditTaskSubmit = (e) => {
    e.preventDefault();
    setIsHidden(true);
    editTask(taskFormData);
  };

  const handleMarkComplete = (completeStatus) => {
    console.log("Mark Complete Called");
    const newTaskData = {
      ...taskFormData,
      isComplete: completeStatus,
    };
    setTaskFormData(newTaskData);
    editTask(newTaskData);
  };

  const [isHidden, setIsHidden] = useState(true);

  const displayClass = isHidden === true ? "hidden" : "show";

  const handleDiscardChanges = () => {
    setIsHidden(true);
    setTaskFormData(INITIAL_FORM_STATE);
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Header style={{ display: "flex" }}>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
        <span
          style={{
            color: "black",
            textDecoration: "none",
            flex: 1,
            cursor: "pointer",
            alignSelf: "center",
            fontSize: 22,
            marginLeft: 10,
          }}
        >
          {title}
        </span>
        <div>
          <Button variant="secondary">Edit</Button>
          <Button
            onClick={() => deleteTask(_id)}
            variant="warning"
            className="mx-2"
          >
            Delete
          </Button>
        </div>
      </Card.Header>

      <Card.Body>
        <h4>
          <Badge variant="success">{volunteerName}</Badge>
        </h4>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "black", fontSize: 18 }}>{description}</p>
          <footer
            style={{ fontSize: 16 }}
            id="blockquote-footer"
            className="blockquote-footer"
          >
            Due On: <cite title="Source Title">Jan 25</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Task;

{
  /* return (
    <div className="task-container">
      <div className="upper-container">
         <div className="complete-container">
        <Checkbox onClick={() => handleMarkComplete(!isComplete)} />
         <button */
}

{
  /*
//             onClick={() => handleMarkComplete(!isComplete)}
//             className="complete-button"
//           >
//             Mark Complete
//           </button>  */
}
//         {/* </div>
//         <div className="title-description-container" key={_id}>
//           <h3>{title}</h3>
//           <p>{description}</p>
//           <p>{volunteerName}</p>
//         </div>

//         <div className="button-container">
//           <button
//             className="edit-button"
//             onClick={() => setIsHidden(!isHidden)}
//           >
//             edit
//           </button>
//         </div>
//       </div>
//       {/* --------------- Edit Task Form --------------------- */}
{
  /*
//       <div className={`editTaskContainer, lower-container, ${displayClass}`}>
//         <h4>Edit Task</h4>
        // <Box */
}
{
  /* //   component="form"
        //   sx={{ */
}
{
  /* //             "& .MuiTextField-root": { m: 1, width: "25ch" },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleEditTaskSubmit}
//         >
//           <TextField */
}
{
  /* //             required
//             id="outlined-required"
//             size="small"
//             label="Title"
//             color="success"
//             placeholder="Title"
//             defaultValue=""
//             name="title"
//             value={taskFormData.title}
//             onChange={handleChange}
//             InputLabelProps={{ */
}
{
  /* //               shrink: true,
//             }}
//           />
//           <TextField */
}
{
  /* //             id="outlined-textarea"
//             size="small"
//             label="Description"
//             placeholder="Write Description Here"
//             multiline
//             value={taskFormData.description}
//             name="description"
//             onChange={handleChange}
//             InputLabelProps={{ */
}
{
  /* //               shrink: true,
//             }}
//           />
//           <TextField */
}
{
  /* //             id="outlined-textarea"
//             size="small"
//             label="Volunteer Name"
//             placeholder="Volunteer Name"
//             multiline
//             value={taskFormData.volunteerName}
//             name="volunteerName"
//             onChange={handleChange}
//             InputLabelProps={{ */
}
{
  /* //               shrink: true,
//             }}
//           />
//           <Stack spacing={2} direction="row">
//             <Button */
}
{
  /* //               type="button"
//               variant="contained"
//               value="Save"
//               size="small"
//               onClick={handleEditTaskSubmit}
//             >
//               Save Changes
//             </Button> */
}
{
  /* //             <Button */
}
{
  /* //               size="small"
//               className="discard-button"
//               type="button"
//               onClick={handleDiscardChanges}
//             >
//               Discard Changes
//             </Button> */
}
{
  /* //             <Button */
}
{
  /* //               size="small"
//               className="delete-button"
//               color="error"
//               onClick={() => deleteTask(_id)}
//             >
//               Delete
//             </Button> */
}
{
  /* //           </Stack> */
}
{
  /* //         </Box> */
}
{
  /* //       </div> */
}
{
  /* //     </div> */
}
{
  /* //   ); */
}
{
  /* // }; */
}

{
  /* // Task.propTypes = {}
//   _id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   volunteerName: PropTypes.string,
//   isComplete: PropTypes.bool.isRequired,
//   deleteTask: PropTypes.func.isRequired,
// }; */
}
