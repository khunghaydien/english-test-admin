import { useClickOutside } from "@/utils";
import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import ErrorMessage from "../common/ErrorMessage";
import Label from "../common/CommonLabel";

type ICommonInput = {
  keyName: string;
  value: string;
  type: "text" | "password";
  label: string;
  placeholder: string;
  onChange: (value: string, keyName: string) => void;
  disabled: boolean;
  error: boolean;
  errorMessage: string;
  startIcon: any;
  endIcon: any;
  required: boolean;
  onClick: () => void;
  className: string;
  autoComplete: "on" | "off";
};
const CommonInput = ({
  keyName,
  value = "",
  type = "text",
  label,
  placeholder,
  onChange = () => {},
  disabled,
  error,
  errorMessage,
  startIcon,
  required,
  endIcon,
  onClick = () => {},
  className,
  autoComplete = "off",
}: Partial<ICommonInput>) => {
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, keyName || "");
  };
  useClickOutside(inputRef, () => {
    setFocus(false);
  });
  return (
    <div className={clsx("common-input")}>
      {label && <Label required={required} keyName={keyName} label={label} />}
      <div className={clsx({ relative: !!startIcon })}>
        {!!startIcon && (
          <div
            className={clsx(
              "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            )}
          >
            {startIcon}
          </div>
        )}
        <input
          autoComplete={autoComplete}
          ref={inputRef}
          type={type}
          id={keyName}
          className={clsx(
            className,
            "border rounded-lg block w-full p-2 outline-none",
            {
              "border-red-500": error,
              "pl-10": startIcon,
              "border-blue-500": !error && focus,
            }
          )}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          onClick={() => !disabled && onClick()}
        />
        {!!endIcon && (
          <div
            className={clsx(
              "absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none"
            )}
          >
            {endIcon}
          </div>
        )}
      </div>
      {errorMessage && error && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};
export default CommonInput;