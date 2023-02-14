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
import { useState } from "react";
import React from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({});
  const [USER_ID, setUserId] = useState([]);

  const URL = "/api/user";

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

  const loginMember = (email, inviteCode, config) => {
    console.log("calling LoginMember with", email, inviteCode);
    axios
      .post(
        `${URL}/guestlogin`,
        {
          email: email,
          inviteCode: inviteCode,
        },
        config
      )
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/guestlogin"
            element={<GuestLogin loginMember={loginMember} />}
          />
          <Route path="/mytasks" element={<MyTasks />} />
          <Route
            path="/mycircle"
            element={
              <MyCirclePage
                editMember={editMember}
                deleteMember={deleteMember}
              />
            }
          />
          <Route path="/addtask" element={<AddTask />} />
          <Route
            path="/addmember"
            element={
              <AddMember
                addMember={addMember}
                inviteCode={userData.inviteCode}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/guestview"
            element={
              <GuestViewPage
                taskData={userData.tasks}
                userName={userData.firstName}
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
