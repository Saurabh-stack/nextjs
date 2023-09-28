import TextInput from "@/components/atoms/TextInput.component";
import useSignUpFormik from "../hooks/useSignUpFormik";
import { FormikHelpers, FormikValues } from "formik";
import Button_Chakra from "@/components/atoms/Button.component";
import { BtnSignIn } from "@/helpers/constants";

export interface ISignUpView {
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>;
}
function SignUpView(props: ISignUpView) {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    isSubmitting,
    isValid,
  } = useSignUpFormik(props.onSubmit);

  return (
    <form onSubmit={handleSubmit} className="py-0 pl-0 flex-grow">
      <TextInput
        type="text"
        name="inFullName"
        placeholder="Full Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values["inFullName"]}
        errorMessage={
          errors.inFullName && touched.inFullName ? errors.inFullName : ""
        }
      />

      <TextInput
        type="email"
        name="inEmail"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values["inEmail"]}
        errorMessage={errors.inEmail && touched.inEmail ? errors.inEmail : ""}
      />
      <TextInput
        type="password"
        name="inPassword"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values["inPassword"]}
        errorMessage={
          errors.inPassword && touched.inPassword ? errors.inPassword : ""
        }
      />
      <TextInput
        type="password"
        name="inConfirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values["inConfirmPassword"]}
        errorMessage={
          errors.inConfirmPassword && touched.inConfirmPassword
            ? errors.inConfirmPassword
            : ""
        }
      />
      {/* 
      
      */}
      <Button_Chakra
        isDisable={!isValid}
        isLoading={isSubmitting}
        type="submit"
      >
        {BtnSignIn}
      </Button_Chakra>
    </form>
  );
}
export default SignUpView;
