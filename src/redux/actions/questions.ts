import { UPDATE_QUESTIONS } from './types';
import { QuizQuestionsStateType } from '../types';

export const updateQuestions = (questions: QuizQuestionsStateType) => {
    return <const>{
        type: UPDATE_QUESTIONS,
        payload: questions
    };
};

export type QuizQuestionsActionsType = ReturnType<typeof updateQuestions>;