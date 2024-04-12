import clsx from "clsx";
import { ReactNode } from "react";

type IGroupItem = {
  children: ReactNode;
  gap: number;
  top: number;
};
const GroupItem = ({ children, gap, top }: Partial<IGroupItem>) => {
  return (
    <div
      className={clsx("group-item flex items-center w-full gap-[20px]", {
        [`gap-[${gap}px]`]: gap,
        [`mt-[${top}px]`]: top,
      })}
    >
      {children}
    </div>
  );
};
export default GroupItem;
