import { QuizQuestionsStateType } from '../types';
import { QuizQuestionsActionsType } from '../actions/questions';
import { UPDATE_QUESTIONS } from '../actions/types';

export default (state: QuizQuestionsStateType = [], action: QuizQuestionsActionsType): QuizQuestionsStateType => {
    switch (action.type) {
        case UPDATE_QUESTIONS:
            return state;
        default:
            return state;
    }
};