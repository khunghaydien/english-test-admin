// import InputText from "@/components/input/InputText";
// import MultipleChoiceAnswer, { IAnswer } from "./MultipleChoiceAnswer";
// export type IMultipleChoiceItem = {
//     question: string,
//     answers: IAnswer[]
// }
// export type IMultipleChoiceExercise = {
//     exercise: IMultipleChoiceItem,
//     exerciseIndex: number,
//     onChangeExercise: (value: string | boolean, keyName: string, exerciseIndex: number, answerIndex?: number,) => void
//     errors: any
//     touched: any
// }
// const MultipleChoiceExercise = ({ exercise,
//     exerciseIndex,
//     onChangeExercise,
//     errors,
//     touched }: IMultipleChoiceExercise) => {
//     const { question, answers } = exercise
//     return (
//         <>
//             <InputText
//                 required
//                 placeholder={"Question"}
//                 label={`Question ${exerciseIndex + 1}`}
//                 keyName="question"
//                 value={question}
//                 onChange={(value: string, keyName: string) => onChangeExercise(value, keyName, exerciseIndex)}
//                 error={
//                     !!errors?.question &&
//                     !!touched?.question
//                 }
//                 errorMessage={errors?.question}
//             />
//             <div className="flex flex-wrap gap-x-12 gap-y-6">
//                 {answers.map(
//                     (answer: IAnswer, answerIndex: number) => (
//                         <MultipleChoiceAnswer
//                             exerciseType='1'
//                             touched={touched?.answers?.[answerIndex]}
//                             errors={errors?.answers?.[answerIndex]}
//                             key={answerIndex}
//                             answerIndex={answerIndex}
//                             answer={answer}
//                             onChange={(value: string | boolean, answerIndex: number, keyName: string) => onChangeExercise(value, keyName, exerciseIndex, answerIndex)}
//                         />
//                     )
//                 )}
//             </div>

//         </>
//     )
// }
// export default MultipleChoiceExercise

import { MULTIPLE_CHOICE, SINGLE_CHOICE } from "@/app/[language]/(modules)/training-exercise/_const";
import withChoiceExercise from "../single-choice/WrappedChoiceExercise";

const SingleChoiceExercise = {
    exerciseType: MULTIPLE_CHOICE
}

export default withChoiceExercise(SingleChoiceExercise)