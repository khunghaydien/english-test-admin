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
      className="input-checkbox flex gap-1 items-center cursor-pointer"
      onClick={handleClick}
    >
      <input
        type="checkbox"
        className="text-blue-900"
        disabled={disabled}
        checked={checked}
      />
      {label && <div>{label}</div>}
    </div>
  );
};

export default InputCheckbox;
