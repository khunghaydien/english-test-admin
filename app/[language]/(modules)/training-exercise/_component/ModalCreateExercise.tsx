import { useFormik } from "formik";
import { useCallback } from "react";
import trainingExerciseValidate from "../_validate";
import GroupItem from "@/components/common/CommonGroupItem";
import InputText from "@/components/input/InputText";
import CommonSelect from "@/components/input/CommonSelect";
import { exerciseTypeOption } from "../_const";
import Exercise from "@/components/common/exercise";
import FullModal from "@/components/modal/FullModal";
import { scrollToFirstErrorMessage } from "@/utils";
type IModalCreateExercise = {
  onClose: () => void
  onSubmit: (values: IInitialvalue) => void
}
type IInitialvalue = {
  exerciseConstruction: string,
  exerciseType: string,
  exercises: any[]
}

const initialValues: IInitialvalue = {
  exerciseConstruction: "",
  exerciseType: "",
  exercises: [],
}

const ModalCreateExercise = ({ onClose, onSubmit }: IModalCreateExercise) => {
  const { exerciseValidate } = trainingExerciseValidate();
  const formik = useFormik({
    initialValues,
    validationSchema: exerciseValidate,
    onSubmit: (values) => {
      setTimeout(() => {
        scrollToFirstErrorMessage()
      })
      onClose()
      onSubmit(values)
    },
  });

  const { values, setFieldValue, errors, touched } = formik;

  const onChangeValue = useCallback((value: string, keyName: string) => {
    setFieldValue(keyName, value);
  }, []);

  return (
    <FullModal
      title="Create Exercise"
      onClose={onClose}
      onSubmit={formik.handleSubmit}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-6">
          <GroupItem gap={24}>
            <InputText
              required
              placeholder={"Exercise Construction"}
              label={"Exercise Construction"}
              keyName="exerciseConstruction"
              value={values.exerciseConstruction}
              onChange={onChangeValue}
              error={
                !!errors.exerciseConstruction &&
                !!touched.exerciseConstruction
              }
              errorMessage={errors.exerciseConstruction}
            />
            <CommonSelect
              required
              label={"Exercise Type"}
              placeholder="Exercise Type"
              keyName="exerciseType"
              options={exerciseTypeOption}
              value={values.exerciseType}
              error={!!errors.exerciseType && !!touched.exerciseType}
              errorMessage={errors.exerciseType}
              onChange={onChangeValue}
            />
          </GroupItem>
          <Exercise
            type={values.exerciseType}
            exercises={values.exercises}
            setFieldValue={setFieldValue}
            errors={errors.exercises}
            touched={touched.exercises}
          />
        </div>
      </form>
    </FullModal>
  );
};
export default ModalCreateExercise;
