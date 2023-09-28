import { FormikValues } from "formik";
import LoginView from "./views/LoginView";
function Login() {
  const onSubmit = async (values: FormikValues) => {
    console.log("button clicked");
    setTimeout(() => {
      console.log("waiting completed");
    }, 5000);
  };
  return <LoginView onSubmit={onSubmit} />;
}

export default Login;
