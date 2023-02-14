import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
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

import { initialState } from "./AppContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      showAlert: true,
      alertType: "success",
      alertText: "Successfully created user! Redirecting...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      showAlert: true,
      alertType: "success",
      alertText: "Logging in! Redirecting...",
      tasks: action.payload.tasks,
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return { ...initialState, user: null, token: null };
  }

  if (action.type === ADD_TASK) {
    return { ...state, isLoading: true };
  }
  if (action.type === ADD_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Item Added Successfully",
      tasks: action.payload,
    };
  }
  if (action.type === ADD_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === EDIT_TASK) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Item Added Successfully",
      tasks: action.payload,
    };
  }
  if (action.type === EDIT_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === DELETE_TASK) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Item Successfully Deleted",
      tasks: action.payload,
    };
  }
  if (action.type === DELETE_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
