import InputText from "@/components/input/InputText";
import clsx from "clsx";
import { useMessages } from "next-intl";

const MultipleChoiceQuestion = () => {
  const t = useMessages();
  return (
    <div className={clsx("multiple-choice-question")}>
      <InputText
        placeholder={t.LB_TRAINING_EXERCISE.toString()}
        label={t.LB_TRAINING_EXERCISE.toString()}
        keyName="trainingExercise"
        required
      />
    </div>
  );
};
export default MultipleChoiceQuestion;
