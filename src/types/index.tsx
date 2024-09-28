type TInstructions = {
    instruction: string;
    example: string;
}

export interface IExercise {
    id: string;
    name: string;

    difficulty: "junior" | "middle" | "senior";
    type: "task" | "question";
    technology: "HTML" | "CSS" | "JS" | "React";

    instructions: TInstructions;
}

export interface IUserExercise {
    id: string;
    exerciseId: string;

    userSolution: string;
    AIcomment: string;

    isSolved: boolean;
    isFavorite: boolean;
}