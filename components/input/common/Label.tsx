import clsx from "clsx";
import { memo } from "react";
type ILabel = {
  label: string;
  required: boolean;
  keyName: string;
};
const Label = ({ label, required, keyName }: Partial<ILabel>) => {
  return (
    <label htmlFor={keyName} className={clsx("block mb-2 font-medium")}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};
export default memo(Label);
