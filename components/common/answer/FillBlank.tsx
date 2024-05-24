import InputText from "@/components/input/InputText";
import clsx from "clsx";
import AnswerNumber from "./AnswerNumber";
import { useState } from "react";
type IFillBlank = {
  content: string;
  answers: string[];
};
const FillBlank = ({ content, answers }: IFillBlank) => {
  const contentArray = content.split("....");
  let result: any = [];
  const [tmpAnswers, setTmpAnswers] = useState(Array(10).fill(""));
  const onChange = (value: string, index: number) => {
    const newAnswers = [...tmpAnswers];
    newAnswers[index] = value;
    setTmpAnswers(newAnswers);
  };
  contentArray.forEach((contentItem: string, index: number) => {
    result.push(
      <div key={index} className="flex items-center gap-1">
        <p key={`text-${index}`}>{contentItem}</p>
        <AnswerNumber number={index} />
        <InputText
          height="32px"
          className={clsx("w-[100px]")}
          key={`input-${index}`}
          value={tmpAnswers?.[index]}
          onChange={(value: string) => onChange(value, index)}
        />
      </div>
    );
  });
  return <div className="flex gap-1">{result}</div>;
};
export default FillBlank;
