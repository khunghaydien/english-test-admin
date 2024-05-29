import { updateCodeFormatAlphabet } from "@/utils"
import MultipleChoiceExercise, { IExerciseMultipleChoice } from "./MultipleChoiceExercise"
import { useCallback } from "react"
import CommonButton from "@/components/button"

const defaultExercises: IExerciseMultipleChoice = {
    question: '',
    answers: updateCodeFormatAlphabet(
        Array(4)
            .fill({
                code: '',
                value: '',
                isCorrect: false
            }))
}

type IMultipleChoice = {
    exercises: any
    errors: any
    touched: any
    setFieldValue: any
}

const MultipleChoice = ({ exercises, setFieldValue, errors, touched }: IMultipleChoice) => {
    const handleAddExercise = () => {
        const newExercises: IExerciseMultipleChoice[] = [...exercises];
        newExercises.push(defaultExercises)
        setFieldValue('exercises', newExercises)
    }

    const onChangeExercise = useCallback((value: string | boolean, keyName: string, exerciseIndex: number, answerIndex?: number) => {
        if (!!answerIndex?.toString())
            setFieldValue(`exercises.${exerciseIndex}.answers.${answerIndex}.${keyName}`, value);
        else
            setFieldValue(`exercises.${exerciseIndex}.${keyName}`, value);
    }, [])

    return (
        <>
            {
                exercises.map((exercise: IExerciseMultipleChoice, exerciseIndex: number) => (
                    <MultipleChoiceExercise
                        key={exerciseIndex}
                        exercise={exercise}
                        exerciseIndex={exerciseIndex}
                        onChangeExercise={onChangeExercise}
                        errors={errors?.[exerciseIndex]}
                        touched={touched?.[exerciseIndex]} />
                ))
            }

            <CommonButton
                label="Add Exercise"
                onClick={handleAddExercise}
            />

        </>
    )
}
export default MultipleChoice