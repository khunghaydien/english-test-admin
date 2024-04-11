import { useClickOutside } from "@/utils";
import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import ErrorMessage from "./common/ErrorMessage";
import Label from "./common/Label";

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
  required: boolean;
};
const CommonInput = ({
  keyName,
  value = "",
  type = "text",
  label,
  placeholder,
  onChange,
  disabled,
  error,
  errorMessage,
  startIcon,
  required,
}: Partial<ICommonInput>) => {
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    !!onChange && onChange(e.target.value, keyName || "");
  };
  useClickOutside(inputRef, () => {
    setFocus(false);
  });
  return (
    <div className="common-input">
      {label && <Label required keyName={keyName} label={label} />}
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
          ref={inputRef}
          type={type}
          id={keyName}
          className={clsx("border rounded-lg block w-full p-2 outline-none", {
            "border-red-500": error,
            "pl-10": startIcon,
            "border-blue-500": !error && focus,
          })}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};
export default CommonInput;
