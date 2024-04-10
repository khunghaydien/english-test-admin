"use client";
import { useRouter } from "@/navigation";
const TrainingExercise = () => {
  const router = useRouter();
  const goToDetail = () => {
    router.push(`/training-exercise/${1}`);
  };

  return (
    <div className="training-exercise" onClick={goToDetail}>
      aaa
    </div>
  );
};
export default TrainingExercise;
