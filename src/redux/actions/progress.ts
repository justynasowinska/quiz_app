import { SET_NEXT_QUESTION, RESET_PROGRESS } from './types';

export const getNewQuestion = (currentQuestionIndex: number) => {
    return <const>{
        type: SET_NEXT_QUESTION,
        payload: currentQuestionIndex
    };
};

export const resetProgress = () => {
    return <const>{
        type: RESET_PROGRESS
    };
};

export type QuizProgressActionsType =
      ReturnType<typeof getNewQuestion>
    | ReturnType<typeof resetProgress>
    ;
