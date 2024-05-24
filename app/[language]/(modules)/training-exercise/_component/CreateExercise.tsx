import CommonButton from "@/components/button";
import CommonTap from "@/components/tap/CommonTap";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import trainingExerciseValidate from "../_validate";
import GroupItem from "@/components/common/CommonGroupItem";
import InputText from "@/components/input/InputText";
import { useMessages } from "next-intl";
import CommonSelect from "@/components/input/CommonSelect";
import { exerciseTypeOption } from "../_const";
import FullModal from "@/components/modal/FullModal";
import MultipleChoice from "@/components/common/answer/MultipleChoice";
import Exercise from "@/components/common/exercise";

type ICreateExercise = {};
const CreateExercise = ({}: ICreateExercise) => {
  const t = useMessages();
  const [showModalCreateExercise, setShowModalCreateExercise] = useState(false);
  const handleCreateExercise = () => {
    setShowModalCreateExercise(true);
  };

  const handleClose = () => {
    setShowModalCreateExercise(false);
  };

  const { trainingExerciseDetailValidate } = trainingExerciseValidate();
  const formik = useFormik({
    initialValues: {
      exerciseConstruction: "",
      exerciseType: "",
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
    <div className="create-exercise">
      <div className="flex items-center gap-[24px]">
        <CommonTap label={"List Exercise"} required />
        <CommonButton
          label="Create Exercise"
          startIcon={<AddIcon />}
          onClick={handleCreateExercise}
        />
        {showModalCreateExercise && (
          <FullModal
            title="Create Exercise"
            onClose={handleClose}
            onSubmit={formik.handleSubmit}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-[24px]">
                <GroupItem top={24} gap={24}>
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
                <Exercise />
              </div>
            </form>
          </FullModal>
        )}
      </div>
    </div>
  );
};
export default CreateExercise;
