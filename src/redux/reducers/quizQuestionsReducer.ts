import { QuizQuestionsStateType } from '../types';
import { QuizQuestionsActionsType } from '../actions/questions';
import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_BEGIN, FETCH_QUESTIONS_FAILURE } from '../actions/types';

export const getInitialState = () => ({
    questions: [],
    loading: false,
    error: null
});

export default (state: QuizQuestionsStateType = getInitialState(), action: QuizQuestionsActionsType): QuizQuestionsStateType => {
    switch (action.type) {
        case FETCH_QUESTIONS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                questions: action.payload,
                loading: false,
                error: null
            };
        case FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};