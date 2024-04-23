import * as yup from 'yup'
const trainingExerciseValidate = () => {
    const trainingExerciseDetailValidate = yup.object({
        trainingExercise: yup.string().nullable().required('input requied'),
        trainingType: yup.string().nullable().required('input requied'),
    })
    return {
        trainingExerciseDetailValidate
    }
}
export default trainingExerciseValidate