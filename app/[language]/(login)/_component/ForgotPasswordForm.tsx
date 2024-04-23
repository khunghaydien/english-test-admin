"use client";
import InputText from "@/components/input/InputText";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback } from "react";
import CommonButton from "@/components/button";
type IForgotPasswordForm = {
  onSendEmail: () => void;
  onLogin: () => void;
};
const ForgotPasswordForm = ({ onSendEmail, onLogin }: IForgotPasswordForm) => {
  // login form initial
  const forgotPasswordForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("error email"),
    }),
    onSubmit: () => {
      handleSubmit();
    },
  });
  const { values, setValues } = forgotPasswordForm;

  // change value login form
  const handleChange = useCallback(
    (e: any, keyName: string) => {
      setValues({ ...values, [keyName]: e.target.value });
    },
    [values]
  );

  // login function
  const handleSubmit = () => {
    onSendEmail();
  };

  return (
    <form onSubmit={forgotPasswordForm.handleSubmit}>
      <InputText
        keyName="email"
        error={
          !!forgotPasswordForm.errors.email &&
          !!forgotPasswordForm.touched.email
        }
        errorMessage={forgotPasswordForm.errors.email}
        value={forgotPasswordForm.values.email}
        onChange={handleChange}
      />
      <CommonButton
        type="submit"
        onClick={forgotPasswordForm.handleSubmit}
        label={"Send Email"}
      />
      <div className="text-center">
        <span> Or </span>
        <span
          className="cursor-pointer text-blue-500 underline font-bold "
          onClick={onLogin}
        >
          Login
        </span>
      </div>
    </form>
  );
};
export default ForgotPasswordForm;
