import Mainscreen from "../Mainscreen";
import "../styles/Mainscreen.css";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <Mainscreen title="Sign In">
      <LoginForm />
    </Mainscreen>
  );
};

export default Login;
