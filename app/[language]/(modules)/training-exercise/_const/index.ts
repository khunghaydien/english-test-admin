export const TRAINING_TYPE_GRAMMAR = '1';
export const TRAINING_TYPE_VACABULARY = '2';
export const TRAINING_TYPE_LISTENING = '3';
export const TRAINING_TYPE_READING = '4';
export const TRAINING_TYPE_USE_OF_ENGLISH = '5';
export const TRAINING_TYPE_WRITING = '6';
export const TRAINING_TYPE_EXAM = '7';
export const optionsTrainingType = [
    {
        id: TRAINING_TYPE_GRAMMAR,
        label: "Grammar",
        value: TRAINING_TYPE_GRAMMAR,
    },
    {
        id: TRAINING_TYPE_VACABULARY,
        label: "Vacabulary",
        value: TRAINING_TYPE_VACABULARY,
    },
    {
        id: TRAINING_TYPE_LISTENING,
        label: "Listening",
        value: TRAINING_TYPE_LISTENING,
    },
    {
        id: TRAINING_TYPE_READING,
        label: "Reading",
        value: TRAINING_TYPE_READING,
    },
    {
        id: TRAINING_TYPE_USE_OF_ENGLISH,
        label: "Use Of English",
        value: TRAINING_TYPE_USE_OF_ENGLISH,
    },
    {
        id: TRAINING_TYPE_WRITING,
        label: "Writing",
        value: TRAINING_TYPE_WRITING,
    },
    {
        id: TRAINING_TYPE_EXAM,
        label: "Exam",
        value: TRAINING_TYPE_EXAM,
    },
];

export const MULTIPLE_CHOICE = '1';
export const FILL_BLANK = '2';
export const SINGLE_CHOICE = '3';

export const exerciseTypeOption = [
    {
        id: MULTIPLE_CHOICE,
        label: "Multiple Choice",
        value: MULTIPLE_CHOICE,
    },
    {
        id: FILL_BLANK,
        label: "Fill Blank",
        value: FILL_BLANK,
    },
];