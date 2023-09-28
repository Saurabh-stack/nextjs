import { useEffect } from "react";
import { useFormik, FormikConfig, FormikValues, FormikHelpers } from "formik";
import { loginSchema } from "../schema";
import toast from "react-hot-toast";

const initialValues = {
  inEmail: "",
  inPassword: "",
};

function useLoginFormik(
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>,
  options?: Partial<FormikConfig<FormikValues>>
) {
  // const {enqueueSnackbar} = useSnackbar();

  const formik = useFormik({
    ...options,
    initialValues: {
      ...initialValues,
      ...options?.initialValues,
    },
    validationSchema: loginSchema,
    validateOnMount: true,
    onSubmit,
  });

  useEffect(() => {
    console.log(
      "formik.submitCount::",
      formik.submitCount,
      !formik.isSubmitting,
      !formik.isValid
    );

    if (formik.submitCount > 0 && !formik.isSubmitting && formik.isValid) {
      console.log("inside if condition");
      toast.error("multiple times clicked");
    }
  }, [formik.submitCount, formik.isSubmitting]);

  return formik;
}
export default useLoginFormik;
