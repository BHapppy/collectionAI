import React from "react";
import { IExercise } from "@/app/api/getExercises/BD(test)";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
const ExerciseCard = ({ exercise }: { exercise: IExercise }) => {
  const { isLoading } = useQuery({
    queryKey: ["exercise", exercise.id],
    queryFn: () => exercise,
  });
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <h1>{exercise.name}</h1>
          <div>
            <span>{exercise.difficulty}</span>
            <span>{exercise.type}</span>
            <span>{exercise.technology}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ExerciseCard;
