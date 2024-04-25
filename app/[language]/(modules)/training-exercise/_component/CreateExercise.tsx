import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

type ICreateExercise = {};

const CreateExercise = ({}: ICreateExercise) => {
  return (
    <div className="training-exercise">
      <MultipleChoiceQuestion />
    </div>
  );
};

export default CreateExercise;
