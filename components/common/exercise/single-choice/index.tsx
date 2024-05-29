import { SINGLE_CHOICE } from "@/app/[language]/(modules)/training-exercise/_const";
import withChoiceExercise from "./WrappedChoiceExercise";

const SingleChoiceExercise = {
    exerciseType: SINGLE_CHOICE
}

export default withChoiceExercise(SingleChoiceExercise)