import { memo } from "react";
type IInputLabel = {
  label: string;
  required?: boolean;
};
const InputLabel = ({ label, required }: IInputLabel) => {
  return (
    <div className="input__label">
      {label} {required && <span className="text-red-500">*</span>}
    </div>
  );
};
export default memo(InputLabel);
