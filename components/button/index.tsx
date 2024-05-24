import clsx from "clsx";
import { ReactNode } from "react";
type ICommonButton = {
  disabled: boolean;
  className: string;
  onClick: () => void;
  type: "button" | "submit";
  background: string;
  color: string;
  borderColor: string;
  startIcon: ReactNode;
  endIcon: ReactNode;
  label: string;
  variant: "contained" | "outlined" | "text";
};
const CommonButton = ({
  disabled,
  className,
  onClick,
  startIcon,
  endIcon,
  type = "button",
  label,
  background = "default",
  color = "white",
  borderColor = "blue",
  variant = "contained",
}: Partial<ICommonButton>) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(
        className
          ? className
          : "font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-max",
        { [`bg-${background}-900 text-${color}`]: variant === "contained" },
        { [`border-${borderColor}-500 border`]: variant === "outlined" },
        { [`text-${color}`]: variant === "text" },
        { [`opacity-50`]: disabled }
      )}
      onClick={onClick}
    >
      <div className="flex gap-2 justify-center items-center">
        {startIcon && startIcon}
        {label}
        {endIcon && endIcon}
      </div>
    </button>
  );
};
export default CommonButton;
