import { updateCodeFormatAlphabet } from "@/utils"
import { useCallback } from "react"
import CommonButton from "@/components/button"
import MultipleChoiceExercise, { IMultipleChoiceItem } from "./MultipleChoiceQuestion"
import { SINGLE_CHOICE } from "@/app/[language]/(modules)/training-exercise/_const"
import { IMultipleChoiceAnswerItem } from "./MultipleChoiceAnswer"

const defaultExercises: IMultipleChoiceItem = {
    question: '',
    answers: updateCodeFormatAlphabet(
        Array(4)
            .fill({
                code: '',
                value: '',
                isCorrect: false
            })),
}

export type IMultipleChoiceExercises = {
    exercises: any
    errors: any
    touched: any
    setFieldValue: any
}

const updateAnswersWithSingleCorrect = (
    answers: IMultipleChoiceAnswerItem[],
    answerIndex: number,
    keyName: string,
    value: string | boolean
): IMultipleChoiceAnswerItem[] => {
    return answers.map((answer, index) => {
        if (keyName === 'isCorrect') {
            return {
                ...answer,
                isCorrect: index === answerIndex,
            };
        } else {
            if (index === answerIndex) {
                return {
                    ...answer,
                    [keyName]: value,
                };
            }
            return answer;
        }
    });
};

const withMultipleChoiceExerciseList = ({ exerciseType }: { exerciseType: string }) => {
    return ({
        exercises,
        setFieldValue,
        errors,
        touched,
    }: IMultipleChoiceExercises) => {

        const handleAddExercise = () => {
            const newExercises: IMultipleChoiceItem[] = [...exercises];
            newExercises.push(defaultExercises)
            setFieldValue('exercises', newExercises)
        }

        const onChangeExercise = useCallback(
            (
                value: string | boolean,
                keyName: string,
                exerciseIndex: number,
            ) => {
                setFieldValue(`exercises.${exerciseIndex}.${keyName}`, value);
            }, []
        );

        const onChangeExerciseAnswer = (value: string | boolean,
            keyName: string,
            exerciseIndex: number,
            answerIndex: number) => {
            if (exerciseType === SINGLE_CHOICE)
                onChangeSingleChoiceExerciseAnswer(value,
                    keyName,
                    exerciseIndex,
                    answerIndex)
            else onChangeMultipleChoiceExerciseAnswer(value,
                keyName,
                exerciseIndex,
                answerIndex)
        }

        const onChangeSingleChoiceExerciseAnswer = useCallback(
            (
                value: string | boolean,
                keyName: string,
                exerciseIndex: number,
                answerIndex: number
            ) => {
                const newAnswers = updateAnswersWithSingleCorrect(
                    exercises[exerciseIndex].answers,
                    answerIndex,
                    keyName,
                    value
                );
                setFieldValue(`exercises.${exerciseIndex}.answers`, newAnswers);
            },
            [exerciseType, exercises, setFieldValue]
        );

        const onChangeMultipleChoiceExerciseAnswer = useCallback(
            (
                value: string | boolean,
                keyName: string,
                exerciseIndex: number,
                answerIndex: number
            ) => {
                setFieldValue(`exercises.${exerciseIndex}.answers.${answerIndex}.${keyName}`, value);
            }, []
        );

        return (
            <>
                {
                    exercises.map((exercise: IMultipleChoiceItem, exerciseIndex: number) => (
                        <MultipleChoiceExercise
                            exerciseType={exerciseType}
                            key={exerciseIndex}
                            exercise={exercise}
                            exerciseIndex={exerciseIndex}
                            onChangeExercise={onChangeExercise}
                            onChangeExerciseAnswer={onChangeExerciseAnswer}
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
}
export default withMultipleChoiceExerciseList