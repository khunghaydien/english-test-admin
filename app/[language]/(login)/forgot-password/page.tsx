"use client";
import ForgotPasswordForm from "@/modules/login/ForgotPasswordForm";
import { useRouter } from "next/navigation";
import { useMessages } from "next-intl";
const LoginPage = () => {
  const router = useRouter();
  const t = useMessages();
  return (
    <div className="login-form border p-5 rounded-lg">
      <div className="text-center font-bold">
        {t.LB_FORGOT_PASSWORD.toString()}
      </div>
      <div>{t.MSG_FORGOT_PASSWORD.toString()}</div>
      <ForgotPasswordForm
        onSendEmail={() => {}}
        onLogin={() => router.push("/login")}
      />
    </div>
  );
};
export default LoginPage;
