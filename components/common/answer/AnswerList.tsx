import { useState } from "react";
import { updateCodeFormatAlphabet } from "@/utils";
import CommonButton from "@/components/button";
import { IAnswerItem } from "./type";

type IAnswerList = {
  initialAnswers: IAnswerItem[] | null;
  max?: number;
  min?: number;
  isAddAnswer?: boolean;
};

const defaultAnswers = updateCodeFormatAlphabet(
  Array(4).fill({
    code: "",
    answer: "",
    isCorrect: false,
  })
);

const withAnswer = (AnswerComponent: React.ComponentType<any>) => {
  return ({ initialAnswers, max = 4, min = 2, isAddAnswer }: IAnswerList) => {
    const [answers, setAnswers] = useState<IAnswerItem[]>(
      initialAnswers || defaultAnswers
    );

    const onChange = (code: string, value: any, keyName: string) => {
      const newAnswers = answers.map((answer: IAnswerItem) => {
        if (code === answer.code) {
          return { ...answer, [keyName]: value };
        }
        return answer;
      });
      setAnswers(newAnswers);
    };

    const onRemove = (code: string) => {
      if (answers.length > min) {
        const newAnswers = answers.filter(
          (answer: IAnswerItem) => answer.code !== code
        );
        setAnswers(updateCodeFormatAlphabet(newAnswers));
      }
    };

    const onAdd = () => {
      if (answers.length < max) {
        const newAnswers = [...answers];
        newAnswers.push({
          code: "",
          answer: "",
          isCorrect: false,
        });
        setAnswers(updateCodeFormatAlphabet(newAnswers));
      }
    };

    return (
      <div className="answer-list">
        {answers.map(
          ({ code, answer, isCorrect }: IAnswerItem, index: number) => (
            <AnswerComponent
              isRemove={answers.length > min}
              key={index}
              code={code}
              answer={answer}
              isCorrect={isCorrect}
              onChange={onChange}
              onRemove={onRemove}
            />
          )
        )}
        {isAddAnswer && (
          <div className="mt-[24px]">
            <CommonButton
              disabled={answers.length === max}
              label="Add Answer"
              onClick={onAdd}
            />
          </div>
        )}
      </div>
    );
  };
};

export default withAnswer;
