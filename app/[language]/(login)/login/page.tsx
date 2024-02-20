"use client";
import { getDictionary } from "@/language/get-dictionary";
import { Locale } from "@/language/i18n-config";
import LoginForm from "@/modules/login/LoginForm";
import { useRouter } from "next/navigation";
const LoginPage = async ({
  params: { language },
}: {
  params: { language: Locale };
}) => {
  const router = useRouter();
  const dictionary = await getDictionary(language);
  return (
    <div className="login-form border p-5 rounded-lg">
      <div className="text-center font-bold">{dictionary.LB_LOGIN}</div>
      <LoginForm
        onLogin={() => router.push("/exams/dashboard")}
        onForgotPassword={() => router.push("/forgot-password")}
      />
    </div>
  );
};
export default LoginPage;
