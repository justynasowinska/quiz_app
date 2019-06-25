import { BooleanCorrectAnswerType } from '../types';
import { ADD_USER_ANSWER, RESET_ANSWERS } from './types';

export const addUserAnswer = (questionId: number, answer: BooleanCorrectAnswerType) => {
    return <const>{
        type: ADD_USER_ANSWER,
        payload: {
            questionId,
            answer
        }
    };
};

export const resetUserAnswers = () => {
    return <const>{
        type: RESET_ANSWERS
    };
};

export type QuizAnswersActionsType =
      ReturnType<typeof addUserAnswer>
    | ReturnType<typeof resetUserAnswers>
    ;