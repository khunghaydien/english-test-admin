import { TableBody, TableCell, TableRow } from "@mui/material";
import ConditionRender from "../common/ConditionRender";
import { isEmpty } from "lodash";
import NoData from "../common/NoData";
import CommonTableRow from "./CommonTableRow";
import { ITableColumn } from "./CommonTableHead";
type ICommonTableBody = {
  loading: boolean;
  rows: any[];
  columns: ITableColumn[];
};
const CommonTableBody = ({ loading, rows, columns }: ICommonTableBody) => {
  return (
    <TableBody>
      <ConditionRender
        conditional={!loading && !isEmpty(rows)}
        fallback={
          <TableRow>
            <TableCell>
              <NoData></NoData>
            </TableCell>
          </TableRow>
        }
      >
        {rows.map((row: any, index: number) => (
          <CommonTableRow key={index} row={row} columns={columns} />
        ))}
      </ConditionRender>
    </TableBody>
  );
};
export default CommonTableBody;
