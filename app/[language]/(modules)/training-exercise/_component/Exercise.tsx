import { useState, useEffect } from "react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

type IExercise = {
  exerciseNumber: string;
};

const Exercise = ({ exerciseNumber }: IExercise) => {
  const [currentExercise, setCurrentExercise] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentExercise(exerciseNumber);
    }, 2000);

    return () => clearTimeout(timer);
  }, [exerciseNumber]);

  return (
    <div className="training-exercise">
      {currentExercise}
      <MultipleChoiceQuestion />
    </div>
  );
};

export default Exercise;
