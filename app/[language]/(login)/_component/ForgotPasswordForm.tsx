"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback } from "react";
import CommonButton from "@/components/button";
import CommonInput from "@/components/input/CommonInput";
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
    (value: string, keyName: string) => {
      setValues({ ...values, [keyName]: value });
    },
    [values]
  );

  // login function
  const handleSubmit = () => {
    onSendEmail();
  };

  return (
    <form onSubmit={forgotPasswordForm.handleSubmit}>
      <CommonInput
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
