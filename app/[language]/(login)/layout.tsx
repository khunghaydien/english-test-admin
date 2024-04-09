import clsx from "clsx";
import "./layout.scss";
type ILoginLayout = {
  children: React.ReactNode;
};
const ROOT = "login-layout";
const LoginLayout = ({ children }: ILoginLayout) => {
  return (
    <div
      className={clsx(
        "h-screen w-screen flex items-center justify-end bg-cover bg-no-repeat overflow-hidden",
        ROOT
      )}
    >
      <div className="mr-[15%]">
        <div className="w-[450px] min-h-[350px] rounded-lg p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
export default LoginLayout;
