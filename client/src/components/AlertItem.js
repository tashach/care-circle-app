import React from "react";
import { Alert } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";

const AlertItem = () => {
  const { alertType, alertText } = useAppContext();
  return <Alert variant={`${alertType}`}>{alertText}</Alert>;
};

export default AlertItem;
