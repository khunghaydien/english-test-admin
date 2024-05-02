import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CommonLabel from "../common/CommonLabel";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { getTextEllipsis, useClickOutside } from "@/utils";
import CommonInput from "./CommonInput";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSpring, animated } from "@react-spring/web";
import ErrorMessage from "../common/ErrorMessage";
import CloseIcon from "@mui/icons-material/Close";
import _ from "lodash";
import { INPUT_TIME_DELAY } from "@/const/app.const";
export type OptionItem = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};
type ICommonSelect = {
  label: string;
  required: boolean;
  options: OptionItem[];
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
  const [isBottom, setIsBottom] = useState(false);
  const [tmpValue, setTmpValue] = useState(selected.label);
  const selectRef = useRef<HTMLDivElement>(null);
  const [tmpOptions, setTmpOptions] = useState(options);
  useEffect(() => {
    if (!isEmpty(options)) {
      const val = options.find((item) => item.id === value);
      if (val) setSelected(val);
    }
  }, [value]);

  const getOptionHeight = useMemo(() => {
    if (options.length < 10) {
      return options.length * 40;
    } else return 400;
  }, [options]);

  useEffect(() => {
    const selectRect = selectRef.current?.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (selectRect && windowHeight - selectRect?.bottom < getOptionHeight) {
      setIsBottom(true);
    }
  }, []);

  useEffect(() => {
    setTmpValue(selected.label);
  }, [selected]);

  const handleSelected = (option: OptionItem) => {
    setIsOpen(false);
    setSelected(option);
    if (option.id) onChange(option.id, keyName);
  };

  useClickOutside(selectRef, () => {
    setIsOpen(false);
  });

  const slideDownAnimation = useSpring({
    transform: isOpen ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isOpen ? 1 : 0,
  });

  const clearValue = () => {
    setSelected({});
    onChange("", keyName);
  };

  const handleDebounceFn = (value: string) => {
    const filteredOptions = options.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setTmpOptions(filteredOptions);
  };

  const debounceFn = useCallback(
    _.debounce(handleDebounceFn, INPUT_TIME_DELAY),
    []
  );

  const onChangeValue = useCallback((value: string) => {
    setTmpValue(value);
    debounceFn(value);
  }, []);

  return (
    <div className="common-select" ref={selectRef}>
      {!!label && (
        <CommonLabel label={label} keyName={keyName} required={required} />
      )}
      <div className="relative">
        <CommonInput
          disabled={disabled}
          value={tmpValue}
          onClick={() => setIsOpen(true)}
          endIcon={<ArrowDropDownIcon />}
          placeholder={placeholder}
          error={error}
          onChange={onChangeValue}
          className="cursor-pointer"
        />
        {selected.id && (
          <div
            className="flex items-center justify-center cursor-pointer absolute w-[32px] h-[32px] top-[5.5px] end-5 rounded-full hover:bg-default-200 hover:text-black"
            onClick={clearValue}
          >
            <CloseIcon className="text-[13px]" />
          </div>
        )}
        <div
          className={clsx("absolute z-10 w-full", {
            ["top-[40px]"]: !isBottom,
            ["bottom-[44px]"]: isBottom,
          })}
        >
          <animated.div style={slideDownAnimation}>
            {isOpen && (
              <div className="border rounded-lg mt-1 w-full shadow-md dark:bg-[#3b3b3b] bg-white mh-[400px] overflow-y-scroll">
                {!isEmpty(tmpOptions) ? (
                  tmpOptions.map((option: OptionItem, index) => (
                    <div
                      key={option.id}
                      className={clsx(
                        "py-2 px-4 cursor-pointer first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg",
                        {
                          hidden: !!option.id && ignoreIds.includes(option.id),
                          "bg-default-500 text-white":
                            selected.id === option.id,
                          "hover:bg-default-100 hover:text-black":
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
      </div>
      {errorMessage && error && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};
export default memo(CommonSelect);
