"use client";
import CommonButton from "@/components/button";
import CommonTable from "@/components/table/CommonTable";
import { ITableHeadColumn } from "@/components/table/CommonTableHead";
import { useRouter } from "@/navigation";
const TrainingExerciseListColumns: ITableHeadColumn[] = [
  {
    id: "code",
    label: "Code",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "action",
    label: "Action",
  },
];
const TrainingExerciseListRows = [
  {
    id: "1",
    code: "1",
    name: "Test 1",
    type: "Grammar",
    action: (
      <>
        <CommonButton label="edit" />
      </>
    ),
  },
  {
    id: "2",
    code: "2",
    name: "Test 2",
    type: "Listening",
    action: (
      <>
        <CommonButton label="edit" />
      </>
    ),
  },
];
const TrainingExercise = () => {
  const router = useRouter();
  const handleClickRow = (row: any) => {
    router.push(`/training-exercise/${row.id}`);
  };
  return (
    <div className="training-exercise">
      <CommonTable
        loading={false}
        columns={TrainingExerciseListColumns}
        rows={TrainingExerciseListRows}
        onRowClick={handleClickRow}
      ></CommonTable>
    </div>
  );
};
export default TrainingExercise;
