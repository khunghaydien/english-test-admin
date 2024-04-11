"use client";
import { TextareaAutosize } from "@mui/material";
import ErrorMessage from "./common/ErrorMessage";
import clsx from "clsx";
import { cleanObject, useClickOutside } from "@/utils";
import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  CHANGE_TIME_DELAY,
  INPUT_TEXTAREA_MAX_LENGTH,
} from "@/const/app.const";
import CommonLabel from "./common/Label";
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
  value?: string | number | readonly string[];
  onChange: (e: any, keyName: string) => void;
  type?: "password" | "text";
  isPassword?: boolean;
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
  value,
  maxLength = INPUT_TEXTAREA_MAX_LENGTH,
  required = true,
  type,
  isPassword,
  onChange = () => {},
}: IInputText) => {
  const textAreaRef = useRef(null);
  const changeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState("");
  const customStyle = cleanObject({ ...style, height, resize });

  useEffect(() => {
    if (value !== internalValue && typeof value === "string") {
      setInternalValue(value);
    }
  }, [value]);

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
      {!!label && <CommonLabel label={label} required={required} />}
      {!isPassword ? (
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
      ) : (
        <input
          className={clsx(
            "w-full input-text-area w-100 border rounded-lg outline-none truncate p-1",
            { "border-red-500": error },
            { "border-blue-500-500": focus }
          )}
          ref={textAreaRef}
          onFocus={handleFocus}
          value={internalValue}
          type={type}
          style={customStyle}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {error && <ErrorMessage errorMessage={errorMessage || ""} />}
    </div>
  );
};
export default InputText;
