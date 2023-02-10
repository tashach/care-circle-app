import "./App.css";
import Footer from "./components/Footer";
import {
  ErrorPage,
  AddTask,
  AddMember,
  GuestLogin,
  GuestViewPage,
  LandingPage,
  MyCirclePage,
  MyTasks,
  LoginPage,
  SignUpPage,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({});
  const [USER_ID, setUserId] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userData");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserData(foundUser);
      setUserId(foundUser._id);
      setLoggedIn(true);
    }
  }, []);

  const URL = "/api/user";

  const loginUser = (email, password, config) => {
    console.log("calling LoginUser with", email, password);
    axios
      .post(`${URL}/login`, { email: email, password: password }, config)
      .then((response) => {
        const userAPICopy = { ...response.data };
        console.log("Calling API", userAPICopy);
        setUserData(userAPICopy);
        sessionStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userData", JSON.stringify(response.data));
        // setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = (firstName, lastName, email, password, config) => {
    console.log(
      "Calling createUser",
      firstName,
      lastName,
      email,
      password,
      config
    );
    axios
      .post(
        `${URL}`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        config
      )
      .then((response) => {
        const userAPICopy = { ...response.data };
        console.log("Calling API", userAPICopy);
        sessionStorage.setItem("token", userData.token);
        setUserData(userAPICopy);
        console.log("user data", userData);
        localStorage.setItem("userData", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    console.log("Logout being called");
    localStorage.clear();
    sessionStorage.clear();
    setLoggedIn(false);
  };

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
        localStorage.setItem("userData", JSON.stringify(newUserData));
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
        localStorage.setItem();
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
        localStorage.setItem("userData", JSON.stringify(editedUserData));
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
        localStorage.setItem("userData", JSON.stringify(newUserData));
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
        localStorage.setItem("userData", JSON.stringify(newUserData));
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
        localStorage.setItem("userData", JSON.stringify(editedUserData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ------------------------- Rendering ---------------------- //

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact></Route>
          <Route
            path="/login"
            element={<LoginPage loginUser={loginUser} loggedIn={loggedIn} />}
          />
          <Route
            path="/signup"
            element={<SignUpPage createUser={createUser} loggedIn={loggedIn} />}
          />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route
            path="/mytasks"
            element={
              <MyTasks
                taskData={userData.tasks}
                deleteTask={deleteTask}
                editTask={editTask}
                userName={userData.firstName}
                logout={logout}
              />
            }
          />
          <Route
            path="/mycircle"
            element={
              <MyCirclePage
                memberData={userData.circle}
                editMember={editMember}
                deleteMember={deleteMember}
                logout={logout}
              />
            }
          />
          <Route path="/addtask" element={<AddTask addTask={addTask} />} />
          <Route
            path="/addmember"
            element={<AddMember addMember={addMember} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/guestview"
            element={
              <GuestViewPage
                taskData={userData.tasks}
                userName={userData.firstName}
                editTask={editTask}
                logout={logout}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
