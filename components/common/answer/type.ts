export type IAnswerItem = {
    code: string;
    answer: string;
    isCorrect?: boolean;
};

export type IAnswerFunction = {
    onChange: (code: string, value: any, keyName: string) => void;
    onRemove: (code: string) => void;
};
