import clsx from "clsx";
import { ReactNode } from "react";
type ICommonButton = {
  disabled: boolean;
  className: string;
  onClick: () => void;
  type: "button" | "submit";
  background: "default" | "success" | "error";
  variant: "outlined" | "contained";
  startIcon: ReactNode;
  endIcon: ReactNode;
  label: string;
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
  variant = "outlined",
}: Partial<ICommonButton>) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(
        "font-medium rounded-lg text-sm px-5 py-2.5 me-2",
        className,
        `bg-${background}-900`
      )}
      onClick={onClick}
    >
      {startIcon && startIcon}
      {label}
      {endIcon && endIcon}
    </button>
  );
};
export default CommonButton;
