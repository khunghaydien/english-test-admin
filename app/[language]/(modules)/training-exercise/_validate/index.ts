import * as yup from 'yup'
const trainingExerciseValidate = () => {
    const createExerciseValidate = yup.object({
        trainingExercise: yup.string().nullable().required('input requied'),
        trainingType: yup.string().nullable().required('input requied'),
    })
    const exerciseValidate = yup.object({
        exerciseConstruction: yup.string().nullable().required('input required'),
        exerciseType: yup.string().nullable().required("input required")
    })
    return {
        createExerciseValidate,
        exerciseValidate
    }
}
export default trainingExerciseValidate