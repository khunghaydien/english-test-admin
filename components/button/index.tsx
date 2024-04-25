import clsx from "clsx";
import { ReactNode, useMemo } from "react";
type ICommonButton = {
  disabled: boolean;
  className: string;
  onClick: () => void;
  type: "button" | "submit";
  background: "default" | "success" | "error" | "none";
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
  variant = "contained",
}: Partial<ICommonButton>) => {
  const isContained = useMemo(() => {
    return variant === "contained";
  }, [variant]);
  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(
        className,
        "font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-max text-white",
        `border-${background}-900`,
        { [`bg-${background}-900`]: isContained }
      )}
      onClick={onClick}
    >
      <div className="flex gap-2 justify-center">
        {startIcon && startIcon}
        {label}
        {endIcon && endIcon}
      </div>
    </button>
  );
};
export default CommonButton;
