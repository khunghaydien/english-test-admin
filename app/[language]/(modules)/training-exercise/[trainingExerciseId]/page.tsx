"use client";

import { useFormik } from "formik";
import trainingExerciseValidate from "../validate";
const TrainingExerciseDetail = () => {
  const { trainingExerciseDetailValidate } = trainingExerciseValidate();
  const formik = useFormik({
    initialValues: {
      trainingExercise: "",
      trainingType: "",
      exercises: [],
    },
    validationSchema: trainingExerciseDetailValidate,
    onSubmit: () => {},
  });
  const { values, setValues, errors, touched } = formik;
  return (
    <div className="training-exercise-detail">
      <form onSubmit={formik.handleSubmit}></form>
    </div>
  );
};
export default TrainingExerciseDetail;
