import { QuizProgressType } from '../types';
import { QuizProgressActionsType } from '../actions/progress';
import { SET_NEXT_QUESTION, RESET_PROGRESS } from '../actions/types';

const getInitialState = () => ({
    currentQuestion: 0
});

export default (state: QuizProgressType = getInitialState() , action: QuizProgressActionsType): QuizProgressType => {
    switch (action.type) {
        case SET_NEXT_QUESTION:
            return {
                currentQuestion: action.payload + 1
            };
        case RESET_PROGRESS:
            return {
                currentQuestion: 0
            };
        default:
            return state;
    }
};