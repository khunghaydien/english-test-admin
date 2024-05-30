import InputText from "@/components/input/InputText";
import MultipleChoiceAnswer, { IMultipleChoiceAnswerItem } from "./MultipleChoiceAnswer";
export type IMultipleChoiceItem = {
    question: string,
    answers: IMultipleChoiceAnswerItem[]
}
export type IMultipleChoiceQuestion = {
    exerciseType: string
    exercise: IMultipleChoiceItem,
    exerciseIndex: number,
    onChangeExercise: (value: string | boolean, keyName: string, exerciseIndex: number) => void
    onChangeExerciseAnswer: (value: string | boolean, keyName: string, exerciseIndex: number, answerIndex: number) => void
    errors: any
    touched: any
}
const MultipleChoiceQuestion = ({
    exerciseType,
    exercise,
    exerciseIndex,
    onChangeExercise,
    onChangeExerciseAnswer,
    errors,
    touched }: IMultipleChoiceQuestion) => {
    const { question, answers } = exercise
    return (
        <>
            <InputText
                required
                placeholder={"Question"}
                label={`Question ${exerciseIndex + 1}`}
                keyName="question"
                value={question}
                onChange={(value: string, keyName: string) => onChangeExercise(value, keyName, exerciseIndex)}
                error={
                    !!errors?.question &&
                    !!touched?.question
                }
                errorMessage={errors?.question}
            />
            <div className="flex flex-wrap gap-x-12 gap-y-6">
                {answers.map(
                    (answer: IMultipleChoiceAnswerItem, answerIndex: number) => (
                        <MultipleChoiceAnswer
                            exerciseType={exerciseType}
                            touched={touched?.answers?.[answerIndex]}
                            errors={errors?.answers?.[answerIndex]}
                            key={answerIndex}
                            answerIndex={answerIndex}
                            answer={answer}
                            onChange={(value: string | boolean, answerIndex: number, keyName: string) => onChangeExerciseAnswer(value, keyName, exerciseIndex, answerIndex)}
                        />
                    )
                )}
            </div>
        </>
    )
}
export default MultipleChoiceQuestion
