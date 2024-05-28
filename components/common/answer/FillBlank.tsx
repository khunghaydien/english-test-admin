import InputText from "@/components/input/InputText";
import clsx from "clsx";
import AnswerNumber from "./AnswerNumber";
import { Fragment, useState } from "react";
import React from "react";
type IFillBlank = {
  content: string;
  initialAnswers: string[];
};
const FillBlank = ({ content, initialAnswers }: IFillBlank) => {
  const contents = content.split("....");
  const [tmpAnswers, setTmpAnswers] = useState(initialAnswers);
  const onChange = (value: string, index: number) => {
    const newAnswers = [...tmpAnswers];
    newAnswers[index] = value;
    setTmpAnswers(newAnswers);
  };

  return (
    <div className="flex items-center gap-1 flex-wrap">
      {contents.map((content, index) => (
        <>
          {content.split(" ").map((text, index) => (
            <Fragment key={index}>{text && <span>{text} </span>}</Fragment>
          ))}
          <div className="flex items-center gap-1 flex-nowrap">
            <AnswerNumber number={index} />
            <InputText
              height="32px"
              className={clsx("w-[200px]")}
              key={`input-${index}`}
              value={tmpAnswers?.[index]}
              onChange={(value) => onChange(value, index)}
            />
          </div>
        </>
      ))}
    </div>
  );
};
export default FillBlank;
