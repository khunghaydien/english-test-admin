import { memo, useCallback, useEffect, useRef, useState } from "react";
import CommonLabel from "./common/Label";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { getTextEllipsis, useClickOutside } from "@/utils";
import CommonInput from "./CommonInput";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSpring, animated } from "@react-spring/web";
import ErrorMessage from "./common/ErrorMessage";
import CloseIcon from "@mui/icons-material/Close";
import _ from "lodash";
import { INPUT_TIME_DELAY } from "@/const/app.const";
export type OptionItem = {
  id: string;
  value: string;
  label: string;
  disabled: boolean;
  startIcon: any;
  endIcon: any;
};
type ICommonSelect = {
  label: string;
  required: boolean;
  options: Partial<OptionItem>[];
  ignoreIds: string[];
  onChange: (value: string, keyName: string) => void;
  keyName: string;
  value: string;
  error: boolean;
  errorMessage: string;
  placeholder: string;
  disabled: boolean;
};
const CommonSelect = ({
  label,
  required,
  options = [],
  ignoreIds = [],
  onChange = () => {},
  keyName = "",
  value,
  error,
  errorMessage,
  placeholder,
  disabled,
}: Partial<ICommonSelect>) => {
  const [selected, setSelected] = useState<Partial<OptionItem>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [currentOptions, setCurrentOptions] =
    useState<Partial<OptionItem>[]>(options);
  const selectRef = useRef(null);

  useEffect(() => {
    if (!isEmpty(options)) {
      const val = options.find((item) => item.id === value);
      if (val) setSelected(val);
    }
  }, [value]);

  const handleSelected = (option: Partial<OptionItem>) => {
    setIsOpen(false);
    setSelected(option);
    if (option.id) onChange(option.id, keyName);
  };

  useClickOutside(selectRef, () => {
    setIsOpen(false);
  });

  const slideAnimation = useSpring({
    transform: isOpen ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isOpen ? 1 : 0,
  });

  const clearValue = () => {
    setSelected({});
    onChange("", keyName);
  };

  return (
    <div className="common-select">
      {!!label && (
        <CommonLabel label={label} keyName={keyName} required={required} />
      )}
      <div ref={selectRef} className="relative">
        <CommonInput
          disabled={disabled}
          value={selected.label}
          onClick={() => setIsOpen(true)}
          endIcon={<ArrowDropDownIcon />}
          placeholder={placeholder}
          error={error}
          className="cursor-pointer"
        />
        {selected.id && (
          <div
            className="flex items-center justify-center cursor-pointer absolute w-[32px] h-[32px] top-[5.5px] end-5 rounded-full hover:bg-blue-200 hover:text-black"
            onClick={clearValue}
          >
            <CloseIcon className="text-[13px]" />
          </div>
        )}
        <animated.div style={slideAnimation}>
          {isOpen && (
            <div className="absolute z-10 border rounded-lg mt-1 w-full shadow-md dark:bg-[#3b3b3b] bg-white mh-[415px] overflow-y-scroll">
              {!isEmpty(currentOptions) ? (
                currentOptions.map((option: Partial<OptionItem>) => (
                  <div
                    key={option.id}
                    className={clsx(
                      "py-2 px-4 cursor-pointer first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg",
                      {
                        hidden: !!option.id && ignoreIds.includes(option.id),
                        "bg-blue-500 text-white": selected.id === option.id,
                        "hover:bg-blue-100 hover:text-black":
                          selected.id !== option.id,
                      }
                    )}
                    onClick={() => handleSelected(option)}
                  >
                    <div title={option.label}>
                      {getTextEllipsis(option.label as string)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-2 px-4">{"No Data"}</div>
              )}
            </div>
          )}
        </animated.div>
      </div>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};
export default memo(CommonSelect);
