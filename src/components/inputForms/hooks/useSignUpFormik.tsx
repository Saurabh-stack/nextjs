import { useEffect } from "react";
import { useFormik, FormikConfig, FormikValues, FormikHelpers } from "formik";
import { signUpSchema } from "../schema";
import toast from "react-hot-toast";

const initialValues = {
  inFullName: "",
  inEmail: "",
  inPassword: "",
  inConfirmPassword: "",
  inRole: "",
};
function useSignUpFormik(
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>,
  options?: Partial<FormikConfig<FormikValues>>
) {
  const formik = useFormik({
    ...options,
    initialValues: {
      ...initialValues,
      ...options?.initialValues,
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: true,
    onSubmit,
  });
  useEffect(() => {
    if (formik.submitCount > 0 && !formik.isSubmitting && !formik.isValid) {
      toast.error("Multiple submit not allowed");
    }
  }, [formik.submitCount, formik.isSubmitting]);

  return formik;
}

export default useSignUpFormik;
