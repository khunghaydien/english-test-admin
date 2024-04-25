import ConditionRender from "../common/ConditionRender";
import { isEmpty } from "lodash";
import NoData from "../common/NoData";
import { ITableHeadColumn } from "./CommonTableHead";
import { ReactNode } from "react";
type ICommonTableBody = {
  loading: boolean;
  rows: any;
  columns: ITableHeadColumn[];
  firstRow?: ReactNode;
  lastRow?: ReactNode;
  onRowClick?: (row: any, columnId: string) => void;
};
const CommonTableBody = ({
  loading,
  rows,
  columns,
  firstRow,
  lastRow,
  onRowClick = () => {},
}: ICommonTableBody) => {
  return (
    <tbody>
      <ConditionRender
        conditional={!loading && !isEmpty(rows)}
        fallback={
          <tr>
            <td>
              <NoData></NoData>
            </td>
          </tr>
        }
      >
        {firstRow && firstRow}
        {rows.map((row: any) => (
          <tr key={row.id} className="cursor-pointer">
            {columns.map(({ id, align }) => (
              <td
                align={align}
                key={id}
                onClick={() => onRowClick(row, id)}
                className="px-6 py-4"
              >
                {row[id]}
              </td>
            ))}
          </tr>
        ))}
        {lastRow && lastRow}
      </ConditionRender>
    </tbody>
  );
};
export default CommonTableBody;
