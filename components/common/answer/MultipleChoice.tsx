import CommonInput from "@/components/input/CommonInput";
import InputText from "@/components/input/InputText";
import withAnswer from "./AnswerList";
import { IAnswerFunction, IAnswerItem } from "./type";

export type IMultipleChoice = {
  type: "checkbox" | "radio";
} & IAnswerItem &
  Partial<IAnswerFunction>;

const MultipleChoice = ({
  code,
  answer,
  isCorrect,
  onChange = () => { },
  type,
}: IMultipleChoice) => {
  return (
    <div className="answer flex items-center gap-[24px] w-full mt-[24px]">
      <div>{code}</div>
      <InputText
        value={answer}
        className="w-full"
        keyName="answer"
        onChange={(value: string, keyName: string) =>
          onChange(code, value, keyName)
        }
      ></InputText>
      <CommonInput
        type={type}
        checked={isCorrect}
        onClick={() => onChange(code, !isCorrect, "isCorrect")}
      />
    </div>
  );
};
export default withAnswer(MultipleChoice);
