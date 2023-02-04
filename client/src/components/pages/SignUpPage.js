import Mainscreen from "../Mainscreen";
import "../styles/Mainscreen.css";
import SignUpForm from "../SignUpForm";

const SignUpPage = () => {
  return (
    <Mainscreen title="Sign Up">
      <SignUpForm></SignUpForm>
    </Mainscreen>
  );
};

export default SignUpPage;
