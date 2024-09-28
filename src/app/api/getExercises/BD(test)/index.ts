export interface IExercise {
    id: string
    name: string
    difficulty: string
    type: string
    technology: string
    instructions: {
        instruction: string
        example: string
    }
}

export const allExercises: IExercise[] = [
    {
        id: "qweqwwe",
        name: "isPalindrome",

        difficulty: "junior",
        type: "task",
        technology: "JS",

        instructions: {
            instruction: "Сreate a function that will take a string and check if it is a palindrome",
            example: "IsPalindrome(12345) // false"
        }
    },
    {
        id: "fsadfs",
        name: "Test",

        difficulty: "middle",
        type: "task",
        technology: "JS",

        instructions: {
            instruction: "Сreate a function that will take a string and return test",
            example: "isTest(test) //true"
        }
    },
    {
        id: "absss",
        name: "check number",

        difficulty: "junior",
        type: "task",
        technology: "JS",

        instructions: {
            instruction: "Сreate a function that will take a string and check if it is a palindrome",
            example: "IsPalindrome(12345) // false"
        }
    }
]

export const fetchExercises = async (): Promise<IExercise[]> => {
  return Promise.resolve(allExercises);
};
