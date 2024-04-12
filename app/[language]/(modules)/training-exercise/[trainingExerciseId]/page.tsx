"use client";

import { useFormik } from "formik";
import trainingExerciseValidate from "../validate";
import CommonInput from "@/components/input/CommonInput";
import { useMessages } from "next-intl";
import { useCallback } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CommonSelect from "@/components/input/CommonSelect";
import GroupItem from "@/components/input/common/GroupItem";
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
  {
    id: "3",
    label: "Listening",
    value: "3",
  },
  {
    id: "4",
    label: "Reading",
    value: "4",
  },
  {
    id: "5",
    label: "Use Of English",
    value: "5",
  },
  {
    id: "6",
    label: "Writing",
    value: "6",
  },

  {
    id: "7",
    label: "Exam",
    value: "7",
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
            startIcon={<EmailIcon />}
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

        <button type="submit" onClick={() => formik.handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
export default TrainingExerciseDetail;
