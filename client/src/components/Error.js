import { Alert } from "react-bootstrap";

const Error = (info, { children }) => {
  return <Alert>{children}</Alert>;
};

export default Error;
