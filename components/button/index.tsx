import { cleanObject } from "@/utils";
import { Button } from "@mui/material";
import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

type ICommonButton = {
  disabled?: boolean;
  children: string | ReactNode;
  height?: number;
  width?: number | string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit";
  startIcon?: any;
  endIcon?: any;
};
const CommonButton = ({
  disabled,
  children,
  height,
  width,
  color,
  variant,
  className,
  style,
  onClick,
  startIcon,
  endIcon,
  type = "button",
}: ICommonButton) => {
  const customStyle = cleanObject({ ...style, height, width });
  return (
    <Button
      type={type}
      className={clsx(className, "font-bold")}
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={onClick}
      style={customStyle}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};
export default CommonButton;
