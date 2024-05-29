import CommonButton from "@/components/button";
import CommonModal from "@/components/modal/FadeModal";
import SlideModal from "@/components/modal/SlideModal";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type IDetailExercise = {};
const DetailExercise = ({ }: IDetailExercise) => {
  const [showModalDetailExercise, setShowModalDetailExercise] = useState(false);
  const handleDetailExercise = () => {
    setShowModalDetailExercise(true);
  };
  const handleClose = () => {
    setShowModalDetailExercise(false);
  };
  return (
    <div className="create-exercise">
      <div className="flex items-center gap-6">
        <CommonTap label={"List Exercise"} required />
        <CommonButton
          label="Create Exercise"
          startIcon={<AddIcon />}
          onClick={handleDetailExercise}
        />
        {showModalDetailExercise && (
          <SlideModal
            title="Slide Modal Title"
            onClose={handleClose}
            onSubmit={() => { console.log('Slide Modal Submitted'); }}
          >
            <p>This is the content of the slide modal.</p>
          </SlideModal>
        )}
      </div>
    </div>
  );
};
export default DetailExercise;
