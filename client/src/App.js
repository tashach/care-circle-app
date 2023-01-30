import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import MemberList from "./components/MemberList";
import NewTaskForm from "./components/NewTaskForm";
import NewMemberForm from "./components/NewMemberForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [userData, setUserData] = useState([]);

  const URL = "http://localhost:5000/api/user";
  // const URL = "https://care-circle-app.herokuapp.com/api/user";

  const USER_ID = "63d013fc80b92d424dd68e23";

  const fetchUserData = () => {
    axios
      .get(`${URL}/${USER_ID}`)
      .then((response) => {
        const userAPICopy = { ...response.data };
        console.log("Calling API");
        setUserData(userAPICopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchUserData, []);

  const addTask = (newTask) => {
    console.log("Calling addTask");
    axios
      .post(`${URL}/task/${USER_ID}`, newTask)
      .then((response) => {
        const newUserData = JSON.parse(JSON.stringify(userData));
        const newTaskJSON = {
          ...newTask,
          volunteerName: "",
          isComplete: false,
          _id: response.data._id,
        };
        newUserData.tasks.push(newTaskJSON);
        setUserData(newUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = (taskId) => {
    console.log("Calling deleteTask");
    axios
      .delete(`${URL}/task/${USER_ID}/${taskId}`)
      .then(() => {
        const newUserData = JSON.parse(JSON.stringify(userData));
        const newTaskList = [];
        for (const task of newUserData.tasks) {
          if (task._id !== taskId) {
            newTaskList.push(task);
          }
        }
        newUserData.tasks = newTaskList;
        setUserData(newUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editTask = (taskInfo) => {
    console.log("Calling editTask");
    axios
      .put(`${URL}/task/${USER_ID}`, taskInfo)
      .then(() => {
        const editedUserData = JSON.parse(JSON.stringify(userData));
        const newTaskList = [];
        for (const task of editedUserData.tasks) {
          if (task._id !== taskInfo._id) {
            newTaskList.push(task);
          } else {
            newTaskList.push(taskInfo);
          }
        }
        editedUserData.tasks = newTaskList;
        setUserData(editedUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // --------------------------- Member Routes -----------------//
  const addMember = (newMember) => {
    console.log("Calling addMember");
    axios
      .post(`${URL}/circle/${USER_ID}`, newMember)
      .then((response) => {
        console.log(`printing response data id ${response.data._id}`);
        const newUserData = JSON.parse(JSON.stringify(userData));
        const newMemberJSON = {
          ...newMember,
          _id: response.data._id,
        };
        newUserData.circle.push(newMemberJSON);
        setUserData(newUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMember = (memberId) => {
    console.log("Calling deleteMember");
    axios
      .delete(`${URL}/circle/${USER_ID}/${memberId}`)
      .then(() => {
        const newUserData = JSON.parse(JSON.stringify(userData));
        const newMemberList = [];
        for (const member of newUserData.circle) {
          if (member._id !== memberId) {
            newMemberList.push(member);
          }
        }
        newUserData.circle = newMemberList;
        setUserData(newUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editMember = (memberInfo) => {
    console.log("Calling editMember");
    axios
      .put(`${URL}/task/${USER_ID}`, memberInfo)
      .then(() => {
        const editedUserData = JSON.parse(JSON.stringify(userData));
        const newMemberList = [];
        for (const member of editedUserData.circle) {
          if (member._id !== memberInfo._id) {
            newMemberList.push(member);
          } else {
            newMemberList.push(memberInfo);
          }
        }
        editedUserData.circle = newMemberList;
        setUserData(editedUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ------------------------- Rendering ---------------------- //
  return (
    <div className="">
      <header className="">Care Circle</header>
      <main>
        <h1>Welcome, {userData.firstName}!</h1>
        <div id="mainContainer">
          <div id="leftContainer">
            <h2>Upcoming Tasks</h2>
            <NewTaskForm addTask={addTask} id="newTaskForm" />
            <TaskList
              taskData={userData.tasks}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </div>
          <div id="rightContainer">
            <h2>My Circle</h2>
            <NewMemberForm addMember={addMember} />
            <MemberList
              memberData={userData.circle}
              deleteMember={deleteMember}
              editMember={editMember}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
