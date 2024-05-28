import InputText from "@/components/input/InputText";
import GroupItem from "../CommonGroupItem";

type IExercise = {
}
const Exercise = ({ }: IExercise) => {
  return (
    <>
      <GroupItem top={24} gap={24}>
        {/* <InputText
          required
          placeholder={"Question"}
          label={"Question"}
          keyName="question"
          value={values.exercises[0].question}
          onChange={onChangeValue}
          error={
            !!errors.exercises[0].question &&
            !!touched.exercises[0].question
          }
          errorMessage={errors.exercises[0].question}
        /> */}
      </GroupItem>
    </>
  );
};
export default Exercise;
