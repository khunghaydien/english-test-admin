"use client";
import { getDictionary } from "@/language/get-dictionary";
import { Locale } from "@/language/i18n-config";
import ForgotPasswordForm from "@/modules/login/ForgotPasswordForm";
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
      <div className="text-center font-bold">
        {dictionary.LB_FORGOT_PASSWORD}
      </div>
      <div>
        Enter your user account verified email address and we will send you a
        password reset link.
      </div>
      <ForgotPasswordForm
        onSendEmail={() => {}}
        onLogin={() => router.push("/login")}
      />
    </div>
  );
};
export default LoginPage;
