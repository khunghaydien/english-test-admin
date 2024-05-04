import CommonButton from "@/components/button";
import CommonModal from "@/components/modal";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type ICreateExercise = {};
const CreateExercise = ({}: ICreateExercise) => {
  const [showModalCreateExercise, setShowModalCreateExercise] = useState(false);
  const handleCreateExercise = () => {
    setShowModalCreateExercise(true);
  };
  return (
    <div className="create-exercise">
      <div className="flex items-center gap-[24px]">
        <CommonTap label={"List Exercise"} required />
        <CommonButton
          label="Create Exercise"
          startIcon={<AddIcon />}
          onClick={handleCreateExercise}
        />
        {showModalCreateExercise && (
          <CommonModal
            title="test"
            onClose={() => setShowModalCreateExercise(false)}
          >
            ssss
          </CommonModal>
        )}
      </div>
    </div>
  );
};
export default CreateExercise;
