"use client";
import LoginForm from "@/modules/login/LoginForm";
import { useRouter } from "next/navigation";
import { useMessages } from "next-intl";
const LoginPage = () => {
  const router = useRouter();
  const t = useMessages();
  return (
    <div className="login-form border p-5 rounded-lg">
      <div className="text-center font-bold">{t.LB_LOGIN.toString()}</div>
      <LoginForm
        onLogin={() => router.push("/exams/dashboard")}
        onForgotPassword={() => router.push("/forgot-password")}
      />
    </div>
  );
};
export default LoginPage;
