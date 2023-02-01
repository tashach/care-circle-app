import PropTypes from "prop-types";
import Mainscreen from "../components/Mainscreen.js";
import { Button, Card, Badge } from "react-bootstrap";
import { Link, taskData } from "react-router-dom";
import TaskList from "../components/TaskList.js";
import Header from "../components/Header";
// import taskData from "../App";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Mainscreen title="Welcome Back Tasha">
        <Link to="addtask">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Add New Task
          </Button>
        </Link>
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
              Title
            </span>

            <div>
              <Button>Edit</Button>
              <Button variant="danger">Delete</Button>
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
      </Mainscreen>
    </>
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
