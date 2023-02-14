import React, { useReducer, useContext } from "react";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  EDIT_TASK,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
} from "./actions";

import reducer from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  tasks: user ? JSON.parse(user).tasks : null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const URL = "/api/user";

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(user.token));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER });
    try {
      const response = await axios.post(`${URL}`, currentUser);
      const user = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
      addUserToLocalStorage(user);
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    clearAlert();
  };

  const login = async (currentUser) => {
    dispatch({ type: LOGIN_USER });
    try {
      const response = await axios.post(`${URL}/login`, currentUser);
      // console.log(response.data);
      const user = response.data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      addUserToLocalStorage(user);
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const addTask = async (newTask) => {
    dispatch({ type: ADD_TASK });
    const newUserData = JSON.parse(user);
    const id = newUserData._id;
    try {
      const response = await axios.post(`${URL}/task/${id}`, newTask);
      const taskList = JSON.parse(user).tasks;
      taskList.push(response.data);
      dispatch({ type: ADD_TASK_SUCCESS, payload: taskList });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ADD_TASK_ERROR,
        payload: { msg: error.response.statusText },
      });
    }
    clearAlert();
  };

  const editTask = async (newTask) => {
    dispatch({ type: EDIT_TASK });
    console.log("Calling editTask");
    const newUserData = JSON.parse(user);
    const id = newUserData._id;
    try {
      await axios.put(`${URL}/task/${id}`, newTask);
      const newTaskList = [];
      for (const task of newUserData.tasks) {
        if (task._id !== newTask._id) {
          newTaskList.push(task);
        } else {
          newTaskList.push(newTask);
        }
      }
      dispatch({ type: EDIT_TASK_SUCCESS, payload: newTaskList });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: EDIT_TASK_ERROR,
        payload: { msg: error.response.statusText },
      });
    }
    clearAlert();
  };

  const deleteTask = async (taskId) => {
    console.log("Calling deleteTask");
    dispatch({ type: DELETE_TASK });
    const newUserData = JSON.parse(user);
    const id = newUserData._id;
    try {
      axios.delete(`${URL}/task/${id}/${taskId}`);
      const newTaskList = [];
      for (const task of newUserData.tasks) {
        if (task._id !== taskId) {
          newTaskList.push(task);
        }
        dispatch({ type: DELETE_TASK_SUCCESS, payload: newTaskList });
      }
    } catch (error) {
      console.log();
      dispatch({
        type: DELETE_TASK_ERROR,
        payload: { msg: error.response.statusText },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        login,
        registerUser,
        logoutUser,
        addTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
