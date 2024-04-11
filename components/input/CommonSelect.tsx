import { memo, useMemo } from "react";
import CommonLabel from "./common/Label";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { getTextEllipsis } from "@/utils";
import { makeStyles } from "@mui/styles";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
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
}: Partial<ICommonSelect>) => {
  const classes = useStyles();
  const handleChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value as string;
    onChange(value, keyName);
  };
  const option = useMemo(() => {
    const val = options.find(
      (option: Partial<OptionItem>) => option.value == value
    );
    return val?.value?.toString() || "";
  }, [options, value]);
  return (
    <div className="common-select">
      {!!label && (
        <CommonLabel label={label} keyName={keyName} required={required} />
      )}
      <Select
        id="countries"
        className="border rounded-lg block w-full outline-none"
        onChange={handleChange}
        value={option}
      >
        {!isEmpty(options) ? (
          options.map((option: Partial<OptionItem>) => (
            <MenuItem
              disabled={option.disabled}
              key={option.id}
              value={option.id}
              className={clsx("p-2", {
                hiden: !!option.id && ignoreIds.includes(option.id),
              })}
            >
              <div title={option.label}>
                {getTextEllipsis(option.label as string)}
              </div>
            </MenuItem>
          ))
        ) : (
          <MenuItem selected>
            <div>{"No Data"}</div>
          </MenuItem>
        )}
      </Select>
    </div>
  );
};
const useStyles = makeStyles(() => ({}));
export default memo(CommonSelect);
