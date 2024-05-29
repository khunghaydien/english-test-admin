"use client";

import { useFormik } from "formik";
import InputText from "@/components/input/InputText";
import { useMessages } from "next-intl";
import { useCallback, useState } from "react";
import CommonSelect from "@/components/input/CommonSelect";
import GroupItem from "@/components/common/CommonGroupItem";
import { optionsTrainingType } from "../_const";
import CommonButton from "@/components/button";
import AddIcon from "@mui/icons-material/Add";
import CommonTap from "@/components/tap/CommonTap";
import ModalCreateExercise from "../_component/ModalCreateExercise";
import trainingExerciseValidate from "../_validate";
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

const TrainingExerciseDetail = () => {
  const t = useMessages();
  const { createExerciseValidate } = trainingExerciseValidate();
  const [showModalCreateExercise, setShowModalCreateExercise] = useState(false);
  const handleCreateExercise = () => {
    setShowModalCreateExercise(true);
  };

  const handleClose = () => {
    setShowModalCreateExercise(false);
  };

  const formik = useFormik({
    initialValues: {
      trainingExercise: "",
      trainingType: "",
      exercises: [],
    },
    validationSchema: createExerciseValidate,
    onSubmit: (values) => { },
  });

  const { values, setFieldValue, errors, touched } = formik;
  const onChangeValue = useCallback((value: string, keyName: string) => {
    setFieldValue(keyName, value);
  }, []);

  const onSubmitExercise = (values: any) => {
  }
  return (
    <div className="training-exercise-detail">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-6">
          <GroupItem top={24} gap={24}>
            <InputText
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
              label={"Training Type"}
              error={!!errors.trainingType && !!touched.trainingType}
              errorMessage={errors.trainingType}
              placeholder="Training Type"
              onChange={onChangeValue}
              required
            />
          </GroupItem>
          <div className="create-exercise">
            <div className="flex items-center gap-6">
              <CommonTap label={"List Exercise"} required />
              <CommonButton
                label="Create Exercise"
                startIcon={<AddIcon />}
                onClick={handleCreateExercise}
              />
            </div>
          </div>
          <CommonButton
            type="submit"
            onClick={() => formik.handleSubmit}
            label={"Submit"}
          />
        </div>
      </form>

      {showModalCreateExercise && (
        <ModalCreateExercise
          onClose={handleClose}
          onSubmit={onSubmitExercise} />
      )}
    </div>
  );
};
export default TrainingExerciseDetail;
