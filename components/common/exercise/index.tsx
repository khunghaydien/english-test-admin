import FillBlank from "../answer/FillBlank";
import MultipleChoice from "../answer/MultipleChoice";

const Exercise = () => {
  return (
    <>
      <MultipleChoice initialAnswers={null} isAddAnswer max={4} min={2} />
      <FillBlank
        content={"test .... chúng ta không .... nhau .... suốt kiếp ...."}
        answers={[]}
      ></FillBlank>
    </>
  );
};
export default Exercise;
