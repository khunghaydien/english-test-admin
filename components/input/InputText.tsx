import { useClickOutside } from "@/utils";
import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import ErrorMessage from "../common/ErrorMessage";
import Label from "../common/CommonLabel";

type IInputText = {
  height: string;
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
  onBlur: () => void;
  className: string;
  autoComplete: "on" | "off";
};
const InputText = ({
  height = "42px",
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
  onBlur = () => {},
  className,
  autoComplete = "off",
}: Partial<IInputText>) => {
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, keyName || "");
  };
  useClickOutside(inputRef, () => {
    setFocus(false);
  });
  return (
    <div className={clsx(className, "common-input")}>
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
            "border rounded-lg block w-full p-2 outline-none bg-inherit",
            `h-[${height}]`,
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
          onBlur={onBlur}
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
export default InputText;
