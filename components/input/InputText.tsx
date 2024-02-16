"use client";
import { TextareaAutosize } from "@mui/material";
import ErrorMessage from "../common/ErrorMessage";
import clsx from "clsx";
import { cleanObject, useClickOutside } from "@/utils";
import { CSSProperties, useRef, useState } from "react";
import {
  CHANGE_TIME_DELAY,
  INPUT_TEXTAREA_MAX_LENGTH,
} from "@/const/app.const";
type IInputText = {
  label?: string;
  errorMessage?: string;
  error?: boolean;
  placeholder?: string;
  disabled?: boolean;
  height?: any;
  style?: CSSProperties;
  resize?: "both" | "vertical" | "horizontal" | "initial" | "unset" | "none";
  minRows?: number;
  maxRows?: number;
  maxLength?: number;
  required?: boolean;
  keyName: string;
  onChange: (e: any, keyName: string) => void;
};
const InputText = ({
  label,
  errorMessage,
  error,
  placeholder,
  keyName,
  disabled,
  resize = "none",
  height = "40px",
  style,
  minRows,
  maxRows,
  maxLength = INPUT_TEXTAREA_MAX_LENGTH,
  required = true,
  onChange = () => {},
}: IInputText) => {
  const textAreaRef = useRef(null);
  const changeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState("");
  const customStyle = cleanObject({ ...style, height, resize });
  const handleFocus = () => {
    setFocus(true);
  };
  useClickOutside(textAreaRef, () => {
    setFocus(false);
  });
  const handleChange = (e: any) => {
    if (changeTimeoutRef.current) {
      clearTimeout(changeTimeoutRef.current);
    }
    setInternalValue(e.target.value);
    changeTimeoutRef.current = setTimeout(() => {
      onChange(e, keyName);
    }, CHANGE_TIME_DELAY);
  };
  return (
    <div className="input">
      {label && (
        <div className="input-label">
          {label} {required && <span className="text-red-500">*</span>}
        </div>
      )}
      <TextareaAutosize
        className={clsx(
          "w-full input-text-area w-100 border rounded-lg outline-none truncate p-1",
          { "border-red-500": error },
          { "border-blue-500-500": focus }
        )}
        ref={textAreaRef}
        onFocus={handleFocus}
        onChange={handleChange}
        placeholder={placeholder}
        value={internalValue}
        disabled={disabled}
        style={customStyle}
        minRows={minRows}
        maxRows={maxRows}
        maxLength={maxLength}
      />
      {error && <ErrorMessage errorMessage={errorMessage || ""} />}
    </div>
  );
};
export default InputText;
