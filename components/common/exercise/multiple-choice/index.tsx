import InputText from "@/components/input/InputText";
import { useMessages } from "next-intl";
import RemoveIcon from "@mui/icons-material/Remove";
import CommonInput from "@/components/input/CommonInput";
import { useState } from "react";
type IAnswer = {
  id: string;
  value: string;
  isAnswer: boolean;
};
type AnswerListProps = {
  answers: IAnswer[];
};

const withAnswers = (Answer: React.ComponentType<Partial<IAnswer>>) => {
  return (props: AnswerListProps) => {
    return (
      <div className="answer-list ">
        {props.answers.map((answer) => (
          <Answer key={answer.id} {...answer} />
        ))}
      </div>
    );
  };
};

const Answer = ({ id, value, isAnswer }: Partial<IAnswer>) => {
  const [checked, setIsChecked] = useState(isAnswer);
  return (
    <div className="answer flex items-center gap-[24px] w-full mt-[24px]">
      <div>{id}</div>
      <InputText value={value} className="w-full"></InputText>
      <CommonInput
        type="checkbox"
        checked={checked}
        onClick={() => setIsChecked((prev) => !prev)}
      />
      <div className="flex items-center justify-center rounded-full bg-error-500 w-[24px] h-[24px] cursor-pointer">
        <RemoveIcon />
      </div>
    </div>
  );
};

const AnswerList = withAnswers(Answer);

const answers: IAnswer[] = [
  { id: "A", value: "Answer 1", isAnswer: false },
  { id: "B", value: "Answer 2", isAnswer: true },
  { id: "C", value: "Answer 3", isAnswer: false },
  { id: "D", value: "Answer 4", isAnswer: false },
];

const MultipleChoice = () => {
  const t = useMessages();
  return (
    <div className="multiple-choice">
      <InputText
        placeholder={"question"}
        label={"question"}
        keyName="question"
        required
      />
      <AnswerList answers={answers} />
    </div>
  );
};

export default MultipleChoice;
