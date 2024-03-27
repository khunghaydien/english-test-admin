import { Checkbox } from "@mui/material";

type ICheckbox = {
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  onClick?: () => void;
};
const InputCheckbox = ({
  disabled,
  checked,
  indeterminate,
  label,
  onClick,
}: ICheckbox) => {
  const handleClick = () => {
    !!onClick && !disabled && onClick();
  };
  return (
    <div
      className="flex gap-1 items-center cursor-pointer"
      onClick={handleClick}
    >
      <Checkbox
        disabled={disabled}
        checked={checked}
        indeterminate={indeterminate}
      />
      {label && <div>{label}</div>}
    </div>
  );
};

export default InputCheckbox;
