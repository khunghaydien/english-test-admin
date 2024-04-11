"use client";

import { useFormik } from "formik";
import trainingExerciseValidate from "../validate";
import CommonInput from "@/components/input/CommonInput";
import { useMessages } from "next-intl";
import { useCallback } from "react";
import CommonButton from "@/components/button";
import EmailIcon from "@mui/icons-material/Email";
import CommonSelect from "@/components/input/CommonSelect";
const optionsTrainingType = [
  {
    id: "1",
    label: "Grammar",
    value: "1",
  },
  {
    id: "2",
    label: "Vacabulary",
    value: "2",
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
        <CommonInput
          placeholder={t.LB_TRAINING_EXERCISE.toString()}
          label={t.LB_TRAINING_EXERCISE.toString()}
          keyName="trainingExercise"
          value={values.trainingExercise}
          onChange={onChangeValue}
          error={!!errors.trainingExercise && !!touched.trainingExercise}
          errorMessage={errors.trainingExercise}
          required
          startIcon={<EmailIcon />}
        />
        <CommonSelect
          options={optionsTrainingType}
          value={values.trainingType}
          keyName="trainingType"
          label={"Traing Type"}
          error={!!errors.trainingType && !!touched.trainingType}
          errorMessage={errors.trainingType}
          onChange={onChangeValue}
          required
        />
        <CommonButton type="submit" onClick={formik.handleSubmit}>
          submit
        </CommonButton>
      </form>
    </div>
  );
};
export default TrainingExerciseDetail;
