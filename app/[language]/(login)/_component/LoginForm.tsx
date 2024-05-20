"use client";
import { useFormik } from "formik";
import { AppDispatch } from "@/store";
import { login } from "@/store/reducer/auth";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useCallback } from "react";
import CommonInput from "@/components/input/CommonInput";
import CommonButton from "@/components/button";
import InputText from "@/components/input/InputText";
type ILoginForm = {
  onLogin: () => void;
  onForgotPassword: () => void;
};
const LoginForm = ({ onLogin, onForgotPassword }: ILoginForm) => {
  // login form initial
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      isShowPassword: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("error email"),
      password: Yup.string().required("error password"),
    }),
    onSubmit: () => {
      handleSubmit();
    },
  });
  const { values, setValues } = loginFormik;
  const dispatch = useDispatch<AppDispatch>();

  // change value login form
  const handleChange = useCallback(
    (value: string, keyName: string) => {
      setValues({ ...values, [keyName]: value });
    },
    [values]
  );

  // login function
  const handleSubmit = () => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        onLogin();
      })
      .finally(() => {});
  };

  // change type of password field
  const handleTogglePassword = () => {
    setValues({ ...values, isShowPassword: !values.isShowPassword });
  };

  return (
    <form onSubmit={loginFormik.handleSubmit}>
      <InputText
        keyName="email"
        error={!!loginFormik.errors.email && !!loginFormik.touched.email}
        errorMessage={loginFormik.errors.email}
        value={loginFormik.values.email}
        onChange={handleChange}
      />
      <InputText
        type={loginFormik.values.isShowPassword ? "text" : "password"}
        keyName="password"
        error={!!loginFormik.errors.password && !!loginFormik.touched.password}
        errorMessage={loginFormik.errors.password}
        value={loginFormik.values.password}
        onChange={handleChange}
      />
      <div className="flex items-center justify-between">
        <CommonInput
          label="Show Password"
          onClick={handleTogglePassword}
        ></CommonInput>
        <div
          onClick={onForgotPassword}
          className="text-blue-500 cursor-pointer font-bold pr-2"
        >
          Forgot Password?
        </div>
      </div>
      <CommonButton
        type="submit"
        onClick={loginFormik.handleSubmit}
        label={"Login"}
      />
    </form>
  );
};
export default LoginForm;
