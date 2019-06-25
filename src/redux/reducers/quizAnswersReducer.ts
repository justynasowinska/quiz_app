import { QuizAnswersType } from '../types';
import { QuizAnswersActionsType } from '../actions/answers';
import { ADD_USER_ANSWER, RESET_ANSWERS } from '../actions/types';

export default (state: QuizAnswersType = [], action: QuizAnswersActionsType): QuizAnswersType => {
    switch (action.type) {
        case ADD_USER_ANSWER:
            return [
                ...state,
                action.payload
            ];
        case RESET_ANSWERS:
            return [];
        default:
            return state;
    }
};