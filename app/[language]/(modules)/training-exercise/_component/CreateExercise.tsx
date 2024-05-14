import CommonButton from "@/components/button";
import Modal from "@/components/modal";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type ICreateExercise = {};
const CreateExercise = ({}: ICreateExercise) => {
  const [showModalCreateExercise, setShowModalCreateExercise] = useState(false);
  const handleCreateExercise = () => {
    setShowModalCreateExercise(true);
  };

  const handleClose = () => {
    setShowModalCreateExercise(false);
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
          <Modal onClose={handleClose} title="test">
            <p>Your content here</p>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default CreateExercise;
