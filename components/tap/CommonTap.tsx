import clsx from "clsx";
import CommonButton from "../button";
import { ReactNode, useTransition } from "react";
type ITap = {
  id: string;
  tap: string;
};
type ICommonTap = {
  required: boolean;
  label: string;
  taps: ITap[];
  onClick: (id: string) => void;
  currentTap: string;
  children: ReactNode;
};
const CommonTap = ({
  label,
  taps = [],
  required,
  onClick = () => {},
  currentTap,
}: Partial<ICommonTap>) => {
  const [isPending, startTransition] = useTransition();
  console.log(isPending);
  return (
    <div className="common-tap w-max">
      <div className="flex items-center">
        <label className={clsx("block font-medium")}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        {taps.map(({ tap, id }) => (
          <CommonButton
            key={id}
            onClick={() => {
              startTransition(() => {
                onClick(id);
              });
            }}
            className={clsx("hover:bg-default-100 hover:text-blue-500", {
              ["text-white bg-default-900"]: currentTap === id,
            })}
            label={tap}
            background="none"
          />
        ))}
      </div>
      <div className="bg-success-900 h-[1px] mt-2"></div>
    </div>
  );
};
export default CommonTap;
