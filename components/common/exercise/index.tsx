import { FILL_BLANK, MULTIPLE_CHOICE, SINGLE_CHOICE } from '@/app/[language]/(modules)/training-exercise/_const';
import React from 'react';
import MultipleChoiceExercise from './multiple-choice/MultipleChoiceExercise';
import SingleChoiceExercise from './multiple-choice/SingleChoiceExercise';
type IExercise = {
    exerciseType: string;
    exercises: any;
    errors: any;
    touched: any;
    setFieldValue: any;
};
const Exercise = ({ exerciseType, exercises, errors, touched, setFieldValue }: IExercise) => {
    switch (exerciseType) {
        case MULTIPLE_CHOICE: return (
            <MultipleChoiceExercise exercises={exercises} errors={errors} touched={touched} setFieldValue={setFieldValue} />
        );
        case SINGLE_CHOICE: return (
            <SingleChoiceExercise exercises={exercises} errors={errors} touched={touched} setFieldValue={setFieldValue} />
        );
        case FILL_BLANK: return (
            <div>lll</div>
        )
    }
};

export default Exercise;