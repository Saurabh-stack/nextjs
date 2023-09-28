import { FormikHelpers, FormikValues } from "formik";
import useLoginFormik from "../hooks/useLoginFormik";
import Button_Chakra from "@/components/atoms/Button.component";
import TextInput from "@/components/atoms/TextInput.component";
import { BtnSignIn } from "@/helpers/constants";

export interface ILoginView {
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>;
}

function LoginView(props: ILoginView) {
  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    errors,
    isSubmitting,
    isValid,
  } = useLoginFormik(props.onSubmit);

  return (
    <form onSubmit={handleSubmit} className="py-0 pl-0 flex-grow">
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

      <Button_Chakra
        type="submit"
        isDisable={!isValid}
        isLoading={isSubmitting}
      >
        {BtnSignIn}
      </Button_Chakra>
    </form>
  );
}
export default LoginView;
