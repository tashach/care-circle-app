import PropTypes from "prop-types";
import Mainscreen from "../components/Mainscreen.js";
import { Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import taskData from "../App";

const Dashboard = ({ deleteTask, editTask }) => {
  console.log(taskData);
  taskData = JSON.parse(taskData);

  // {taskData.map((task) => (
  //     <Card key={task._id} style={{ margin: 10 }}>
  //       <Card.Header style={{ display: "flex" }}>
  //         <span
  //           style={{
  //             color: "black",
  //             textDecoration: "none",
  //             flex: 1,
  //             cursor: "pointer",
  //             alignSelf: "center",
  //             fontSize: 18,
  //           }}
  //         >
  //           {task.title}
  //         </span>
  //         <div>
  //           <Button onClick={() => editTask()}>Edit</Button>
  //           <Button
  //             variant="danger"
  //             onClick={() => {
  //               deleteTask();
  //             }}
  //           >
  //             Delete
  //           </Button>
  //         </div>
  //       </Card.Header>
  //       <Card.Body>
  //         <h4>
  //           <Badge bg="success">{task.volunteerName}</Badge>
  //         </h4>
  //         <blockquote className="blockquote mb-0">
  //           <p>{task.description}</p>
  //           <footer className="blockquote-footer">Created on</footer>
  //         </blockquote>
  //       </Card.Body>
  //     </Card>
  //   );)};

  return (
    <Mainscreen title="Welcome Back Tasha">
      <Link to="addtask">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Add New Task
        </Button>
      </Link>
      {taskData.forEach((task) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {task.title}
            </span>

            <div>
              <Button onClick={() => editTask()}>Edit</Button>
              <Button
                variant="danger"
                onClick={() => {
                  deleteTask();
                }}
              >
                Delete
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <h4>
              <Badge bg="success">Jon</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>30 min before lunch</p>
              <footer className="blockquote-footer">Created on</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </Mainscreen>
  );
};

export default Dashboard;

// Dashboard.propTypes = {
//   taskData: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       volunteerName: PropTypes.string,
//       isComplete: PropTypes.bool.isRequired,
//     })
//   ),
//   deleteTask: PropTypes.func.isRequired,
//   editTask: PropTypes.func.isRequired,
// };
