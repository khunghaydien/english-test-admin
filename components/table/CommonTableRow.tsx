import { Checkbox, TableCell, TableRow } from "@mui/material";
import clsx from "clsx";
import { ITableColumn } from "./CommonTableHead";
import ConditionalRender from "../common/ConditionRender";
import ActionCell from "./ActionCell";
import { useMemo } from "react";
import CommonCell from "./CommonCell";
import EditableCell from "./EditableCell";

type ICommonTableRow = {
  row: any;
  isUseCheckbox?: boolean;
  listChecked?: string[];
  onCheckItem?: (id: string) => void;
  columns: ITableColumn[];
};
const CommonTableRow = ({
  row,
  isUseCheckbox,
  listChecked = [],
  onCheckItem,
  columns,
}: ICommonTableRow) => {
  return (
    <TableRow className={clsx("", { "bg-red-200": row.error })}>
      {isUseCheckbox && (
        <TableCell>
          <Checkbox
            checked={listChecked.includes(row.id)}
            onChange={() => {
              !!onCheckItem && onCheckItem(row.id);
            }}
          />
          {columns.map((column: ITableColumn, index: number) => {
            const isEditable = useMemo(() => {
              return true;
            }, []);
            return (
              <ConditionalRender
                key={index}
                conditional={column.id !== "action"}
                fallback={<ActionCell />}
              >
                <ConditionalRender
                  conditional={isEditable}
                  fallback={<CommonCell />}
                >
                  <EditableCell />
                </ConditionalRender>
              </ConditionalRender>
            );
          })}
        </TableCell>
      )}
    </TableRow>
  );
};
export default CommonTableRow;
