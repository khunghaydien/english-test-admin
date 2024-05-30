import { SINGLE_CHOICE } from "@/app/[language]/(modules)/training-exercise/_const";
import withMultipleChoiceExerciseList from "./WrappedMultipleChoiceExerciseList";

const SingleChoiceExercise = {
    exerciseType: SINGLE_CHOICE
}
export default withMultipleChoiceExerciseList(SingleChoiceExercise)