type IAnswerNumber = {
  number: number;
};
const AnswerNumber = ({ number }: IAnswerNumber) => {
  return (
    <div className="flex items-center justify-center bg-default-500 rounded-full w-[24px] h-[24px]">
      {number}
    </div>
  );
};
export default AnswerNumber;
