"use client";

import { useFormik } from "formik";
import trainingExerciseValidate from "../_validate";
import CommonInput from "@/components/input/CommonInput";
import { useMessages } from "next-intl";
import { useCallback, useState, useTransition } from "react";
import CommonSelect from "@/components/input/CommonSelect";
import GroupItem from "@/components/common/CommonGroupItem";
import {
  TRAINING_TYPE_EXAM,
  TRAINING_TYPE_GRAMMAR,
  TRAINING_TYPE_LISTENING,
  TRAINING_TYPE_READING,
  TRAINING_TYPE_USE_OF_ENGLISH,
  TRAINING_TYPE_VACABULARY,
  TRAINING_TYPE_WRITING,
  optionsTrainingType,
} from "../_const";
import CommonButton from "@/components/button";
import CommonTap from "@/components/tap/CommonTap";
import Exercise from "../_component/Exercise";
type IAnswer = {
  id: string;
  answer: string;
  isAnwser: boolean;
};

type IQuestion = {
  question: string;
  answers: IAnswer[];
};

type IExerciseBaseInfo = {
  id: string;
  name: string;
  type: string;
  instruction: string;
};

type IMultipleChoiceQuestion = IExerciseBaseInfo & {
  questions: IQuestion[];
};

type IExercise = {
  exercise: IMultipleChoiceQuestion;
};

const initialTaps = [
  {
    id: "1",
    tap: "Exercise 1",
  },
  {
    id: "2",
    tap: "Exercise 2",
  },
  {
    id: "3",
    tap: "Exercise 3",
  },
];
const TrainingExerciseDetail = () => {
  const t = useMessages();
  const { trainingExerciseDetailValidate } = trainingExerciseValidate();
  const formik = useFormik({
    initialValues: {
      trainingExercise: "",
      trainingType: "",
      exercises: [],
    },
    validationSchema: trainingExerciseDetailValidate,
    onSubmit: (values) => {},
  });
  const { values, setFieldValue, errors, touched } = formik;
  const [currentExercise, setCurrentExercise] = useState("1");

  const onChangeValue = useCallback((value: string, keyName: string) => {
    setFieldValue(keyName, value);
  }, []);

  const handleClickTap = (exerciseNumber: string) => {
    setCurrentExercise(exerciseNumber);
  };

  return (
    <div className="training-exercise-detail">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-[24px]">
          <GroupItem top={24} gap={24}>
            <CommonInput
              placeholder={t.LB_TRAINING_EXERCISE.toString()}
              label={t.LB_TRAINING_EXERCISE.toString()}
              keyName="trainingExercise"
              value={values.trainingExercise}
              onChange={onChangeValue}
              error={!!errors.trainingExercise && !!touched.trainingExercise}
              errorMessage={errors.trainingExercise}
              required
            />
            <CommonSelect
              options={optionsTrainingType}
              value={values.trainingType}
              keyName="trainingType"
              label={"Traing Type"}
              error={!!errors.trainingType && !!touched.trainingType}
              errorMessage={errors.trainingType}
              placeholder="Training Type"
              onChange={onChangeValue}
              required
            />
          </GroupItem>
          <CommonTap
            label="Exercise"
            taps={initialTaps}
            currentTap={currentExercise}
            required
            onClick={handleClickTap}
          />
          <Exercise exerciseNumber={currentExercise} />
          <CommonButton
            type="submit"
            onClick={() => formik.handleSubmit}
            label={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};
export default TrainingExerciseDetail;
