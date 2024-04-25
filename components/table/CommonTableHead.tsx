import { ReactNode } from "react";

export type ITableHeadColumn = {
  id: string;
  label: string;
  align?: "left" | "center" | "right";
  sortBy?: string;
  orderBy?: "asc" | "desc";
  tooltip?: string | ReactNode;
};

export type ISortChangePayload = {
  sortBy: string;
  preOrderBy: string;
  nextOrderBy: string;
  newColumns: ITableHeadColumn[];
};

type ICommonTableHead = {
  columns: ITableHeadColumn[];
  onSortChange?: (payload: ISortChangePayload) => void;
};

const CommonTableHead = ({ columns, onSortChange }: ICommonTableHead) => {
  return (
    <thead className="">
      <tr className="">
        {columns.map(({ id, align, label }) => (
          <td key={id} align={align} className="px-6 py-4">
            {label}
          </td>
        ))}
      </tr>
    </thead>
  );
};
export default CommonTableHead;
