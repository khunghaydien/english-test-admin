"use client";
import InputText from "@/components/input/InputText";
import { getDictionary } from "@/language/get-dictionary";
import { Locale } from "@/language/i18n-config";
import { AppDispatch } from "@/store";
import { login } from "@/store/reducer/auth";
import { useDispatch } from "react-redux";
const LoginPage = async ({
  params: { language },
}: {
  params: { language: Locale };
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const dictionary = await getDictionary(language);
  const handleChange = (e: any, keyName: string) => {
    console.log(e.target.value, keyName);
  };
  const handleSubmit = async () => {
    dispatch(
      login({
        email: "tuan.nguyen@yopmail.com",
        password: "Admin123!",
      })
    )
      .unwrap()
      .then(() => {})
      .finally(() => {});
  };
  return (
    <div className="login-form border p-5 rounded-lg">
      <div className="text-center font-bold">{dictionary.LB_HOME}</div>
      <InputText keyName="email" onChange={handleChange} />
      <InputText keyName="password" onChange={handleChange} />
      <button onClick={handleSubmit}>login</button>
    </div>
  );
};
export default LoginPage;
