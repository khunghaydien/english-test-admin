import clsx from "clsx";
import { memo } from "react";
type ICommonLabel = {
  label: string;
  required: boolean;
  keyName: string;
};
const CommonLabel = ({ label, required, keyName }: Partial<ICommonLabel>) => {
  return (
    <label htmlFor={keyName} className={clsx("block mb-2 font-medium")}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};
export default memo(CommonLabel);
