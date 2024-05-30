import { MULTIPLE_CHOICE } from "@/app/[language]/(modules)/training-exercise/_const";
import withMultipleChoiceExerciseList from "./WrappedMultipleChoiceExerciseList";

const MultipleChoiceExercise = {
    exerciseType: MULTIPLE_CHOICE
}
export default withMultipleChoiceExerciseList(MultipleChoiceExercise)