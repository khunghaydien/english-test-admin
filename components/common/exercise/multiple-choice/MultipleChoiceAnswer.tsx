import CommonInput from "@/components/input/CommonInput";
import InputText from "@/components/input/InputText";
export type IAnswer = {
    code: string,
    value: string,
    isCorrect: boolean
}
export type IMultipleChoiceAnswer = {
    answer: IAnswer
    answerIndex: number
    errors: any
    touched: any
    onChange: (value: string | boolean, answerIndex: number, keyName: string) => void
}
const MultipleChoiceAnswer = ({
    answer,
    answerIndex,
    errors,
    touched,
    onChange,
}: IMultipleChoiceAnswer) => {
    const { code, value, isCorrect } = answer
    return (
        <div className="answer flex items-center gap-[24px] w-full">
            <div>{code}</div>
            <InputText
                value={value}
                className="w-full"
                keyName="value"
                error={
                    !!errors?.value &&
                    !!touched?.value
                }
                errorMessage={errors?.value}
                onChange={(value: string, keyName: string) =>
                    onChange(value, answerIndex, keyName)
                }
            ></InputText>
            <CommonInput
                checked={isCorrect}
                onClick={() => onChange(!isCorrect, answerIndex, 'isCorrect')}
            />
        </div>
    );
};
export default MultipleChoiceAnswer;