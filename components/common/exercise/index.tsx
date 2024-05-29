import { FILL_BLANK, MULTIPLE_CHOICE } from '@/app/[language]/(modules)/training-exercise/_const';
import React from 'react';
import MultipleChoice from './multiple-choice';
type IExercise = {
    type: string;
    exercises: any;
    errors: any;
    touched: any;
    setFieldValue: any;
};
const Exercise = ({ type, exercises, errors, touched, setFieldValue }: IExercise) => {
    switch (type) {
        case MULTIPLE_CHOICE: return (
            <MultipleChoice exercises={exercises} errors={errors} touched={touched} setFieldValue={setFieldValue} />
        );
        case FILL_BLANK: return (
            <div>lll</div>
        )
    }
};

export default Exercise;