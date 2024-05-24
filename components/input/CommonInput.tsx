type ICommonInput = {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onClick?: () => void;
  type?: "radio" | "checkbox";
};
const CommonInput = ({
  disabled,
  checked,
  label,
  onClick,
  type = "checkbox",
}: ICommonInput) => {
  const handleClick = () => {
    !!onClick && !disabled && onClick();
  };
  return (
    <div
      className="input-checkbox flex gap-1 items-center cursor-pointer"
      onClick={handleClick}
    >
      <input
        type={type}
        className="text-blue-900 w-[24px] h-[24px]"
        disabled={disabled}
        checked={checked}
        onChange={() => {}}
      />
      {label && <div>{label}</div>}
    </div>
  );
};

export default CommonInput;
