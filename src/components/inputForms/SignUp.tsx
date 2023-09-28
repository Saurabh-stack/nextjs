import SignUpView from "./views/SignUpView";
function SignUp() {
  const onSubmit = async (values: any) => {
    console.log(values);
    return values;
  };
  return <SignUpView onSubmit={onSubmit} />;
}

export default SignUp;
