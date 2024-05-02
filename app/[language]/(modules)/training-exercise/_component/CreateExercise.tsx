import CommonButton from "@/components/button";
import CommonModal from "@/components/modal";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";

type ICreateExercise = {};
const CreateExercise = ({}: ICreateExercise) => {
  const handleCreateExercise = () => {};
  return (
    <div className="create-exercise">
      <div className="flex items-center gap-[24px]">
        <CommonTap label={"List Exercise"} required />
        <CommonButton
          label="Create Exercise"
          startIcon={<AddIcon />}
          onClick={handleCreateExercise}
        />
        <CommonModal title="test">ssss</CommonModal>
      </div>
    </div>
  );
};
export default CreateExercise;
