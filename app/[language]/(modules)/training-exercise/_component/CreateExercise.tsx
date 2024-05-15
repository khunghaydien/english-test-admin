import CommonButton from "@/components/button";
import FadeModal from "@/components/modal/FadeModal";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type ICreateExercise = {};
const CreateExercise = ({ }: ICreateExercise) => {
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
          <FadeModal
            title="Fade Modal Title"
            onClose={handleClose}
            onSubmit={() => { console.log('Fade Modal Submitted'); }}
          >
            <p>This is the content of the Fade modal.</p>
          </FadeModal>
        )}
      </div>
    </div>
  );
};
export default CreateExercise;
