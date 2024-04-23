"use client";

import { useFormik } from "formik";
import trainingExerciseValidate from "../_validate";
import CommonInput from "@/components/input/CommonInput";
import { useMessages } from "next-intl";
import { useCallback } from "react";
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
} from "../_const";
import CommonButton from "@/components/button";
const optionsTrainingType = [
  {
    id: TRAINING_TYPE_GRAMMAR,
    label: "Grammar",
    value: TRAINING_TYPE_GRAMMAR,
  },
  {
    id: TRAINING_TYPE_VACABULARY,
    label: "Vacabulary",
    value: TRAINING_TYPE_VACABULARY,
  },
  {
    id: TRAINING_TYPE_LISTENING,
    label: "Listening",
    value: TRAINING_TYPE_LISTENING,
  },
  {
    id: TRAINING_TYPE_READING,
    label: "Reading",
    value: TRAINING_TYPE_READING,
  },
  {
    id: TRAINING_TYPE_USE_OF_ENGLISH,
    label: "Use Of English",
    value: TRAINING_TYPE_USE_OF_ENGLISH,
  },
  {
    id: TRAINING_TYPE_WRITING,
    label: "Writing",
    value: TRAINING_TYPE_WRITING,
  },
  {
    id: TRAINING_TYPE_EXAM,
    label: "Exam",
    value: TRAINING_TYPE_EXAM,
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
  const onChangeValue = useCallback((value: string, keyName: string) => {
    setFieldValue(keyName, value);
  }, []);
  return (
    <div className="training-exercise-detail">
      <form onSubmit={formik.handleSubmit}>
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
        <CommonButton
          type="submit"
          onClick={() => formik.handleSubmit}
          label={"Submit"}
        />
      </form>
    </div>
  );
};
export default TrainingExerciseDetail;
