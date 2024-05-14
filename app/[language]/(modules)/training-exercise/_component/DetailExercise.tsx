import CommonButton from "@/components/button";
import CommonModal from "@/components/modal/CommonModal";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type IDetailExercise = {};
const DetailExercise = ({}: IDetailExercise) => {
  const [showModalDetailExercise, setShowModalDetailExercise] = useState(false);
  const handleDetailExercise = () => {
    setShowModalDetailExercise(true);
  };
  const handleClose = () => {
    setShowModalDetailExercise(false);
  };
  return (
    <div className="create-exercise">
      <div className="flex items-center gap-[24px]">
        <CommonTap label={"List Exercise"} required />
        <CommonButton
          label="Create Exercise"
          startIcon={<AddIcon />}
          onClick={handleDetailExercise}
        />
        {showModalDetailExercise && (
          <CommonModal onClose={handleClose} title="test">
            <p>Your content here</p>
          </CommonModal>
        )}
      </div>
    </div>
  );
};
export default DetailExercise;
