import clsx from "clsx";
import React from "react";
import { ReactNode } from "react";

type IGroupItem = {
  children: ReactNode;
  gap: number;
  top: number;
};
const GroupItem = ({ children, gap, top }: Partial<IGroupItem>) => {
  return (
    <div
      className={clsx("group-item flex items-start w-full gap-[20px]", {
        [`gap-[${gap}px]`]: gap,
        [`mt-[${top}px]`]: top,
      })}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className="flex-2">
          {child}
        </div>
      ))}
    </div>
  );
};
export default GroupItem;
