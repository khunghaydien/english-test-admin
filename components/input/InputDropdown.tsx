import { memo } from "react";
import CommonLabel from "./common/InputLabel";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { getTextEllipsis } from "@/utils";
export type OptionItem = {
  id: string;
  value: any;
  label: string;
  disabled?: boolean;
  startIcon?: any;
  endIcon?: any;
};
type IInputDropdown = {
  label?: string;
  required?: boolean;
  options: OptionItem[];
  ignoreIds?: string[];
  onChange: (value: string, option?: OptionItem, keyName?: string) => void;
  keyName?: string;
  value: string;
};
const InputDropdown = ({
  label,
  required,
  options,
  ignoreIds = [],
  onChange,
  keyName,
  value,
}: IInputDropdown) => {
  const handleChange = (e: SelectChangeEvent) => {
    const value = e.target.value as string;
    onChange(
      value,
      options.find((option: OptionItem) => option.value == value),
      keyName || ""
    );
  };
  const handleBlur = () => {};
  const handleClose = () => {};
  const handleOpen = () => {};
  return (
    <div className="input-dropdown">
      {!!label && <CommonLabel label={label} required={required} />}
      <FormControl>
        <Select
          onChange={handleChange}
          onClose={handleClose}
          onOpen={handleOpen}
          onBlur={handleBlur}
          value={value}
        >
          {!isEmpty(options) ? (
            options.map((option: OptionItem, index: number) => (
              <MenuItem
                key={index}
                disabled={!!option.disabled}
                value={option.value}
                className={clsx("input-dropdown__item ", {
                  hiden: !isEmpty(ignoreIds) && ignoreIds.includes(option.id),
                })}
              >
                <div className="flex items-center justify-between size-[12px]">
                  {option.startIcon && option.startIcon}
                  <div className="input-dropdown__item--label">
                    {getTextEllipsis(option.label)}
                  </div>
                  {option.endIcon && option.endIcon}
                </div>
              </MenuItem>
            ))
          ) : (
            <MenuItem>No Data</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};
export default memo(InputDropdown);
