import clsx from "clsx";
import { ReactNode } from "react";
import CommonTableHead, {
  ISortChangePayload,
  ITableHeadColumn,
} from "./CommonTableHead";
import CommonTableBody from "./CommonTableBody";

type ITablePagination = {
  totalElement: number;
  pageSize: number;
  pageNum: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
};

type ICommonTable = {
  loading: boolean;
  columns: ITableHeadColumn[];
  rows: any;
  pagination?: ITablePagination;
  firstRow?: ReactNode;
  lastRow?: ReactNode;
  onSortChange?: (payload: ISortChangePayload) => void;
  onRowClick?: (row: any, columnId: string) => void;
};

const CommonTable = ({
  loading,
  columns,
  rows,
  pagination,
  firstRow,
  lastRow,
  onSortChange,
  onRowClick,
}: ICommonTable) => {
  return (
    <div className={clsx("common-table")}>
      <table className="w-full">
        <CommonTableHead
          columns={columns}
          onSortChange={onSortChange}
        ></CommonTableHead>
        <CommonTableBody
          loading={loading}
          rows={rows}
          columns={columns}
          onRowClick={onRowClick}
          firstRow={firstRow}
          lastRow={lastRow}
        ></CommonTableBody>
      </table>
    </div>
  );
};

export default CommonTable;
