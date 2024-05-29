import { updateCodeFormatAlphabet } from "@/utils"
import { useCallback } from "react"
import CommonButton from "@/components/button"
import { IMultipleChoiceItem } from "../single-choice/WrappedChoiceExercise"
import MultipleChoiceExercise from "./MultipleChoiceExercise"
import SingleChoice from "../single-choice"
// import MultipleChoiceExercise, { IMultipleChoiceItem } from "./MultipleChoiceExercise"

const defaultExercises: IMultipleChoiceItem = {
    question: '',
    answers: updateCodeFormatAlphabet(
        Array(4)
            .fill({
                code: '',
                value: '',
                isCorrect: false
            }))
}

type IMultipleChoiceExercises = {
    exercises: any
    errors: any
    touched: any
    setFieldValue: any
}

const MultipleChoiceExercises = ({ exercises, setFieldValue, errors, touched }: IMultipleChoiceExercises) => {
    const handleAddExercise = () => {
        const newExercises: IMultipleChoiceItem[] = [...exercises];
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
                exercises.map((exercise: IMultipleChoiceItem, exerciseIndex: number) => (
                    <SingleChoice
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
export default MultipleChoiceExercises