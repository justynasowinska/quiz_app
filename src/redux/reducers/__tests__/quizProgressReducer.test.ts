import quizProgressReducer, { getInitialState } from '../quizProgressReducer';
import { QuizProgressType } from '../../types';
import { SET_NEXT_QUESTION, RESET_PROGRESS } from '../../actions/types';
import { QuizProgressActionsType } from '../../actions/progress';

describe('Quiz Progress Reducer', () => {
    it('returns correct state after set next question', () => {
        const currentState: QuizProgressType = getInitialState();

        let action: QuizProgressActionsType = {
            type: SET_NEXT_QUESTION,
            payload: 0
        };

        const expectedResult: QuizProgressType = {
            currentQuestion: 1
        };

        expect(quizProgressReducer(currentState, action)).toEqual(expectedResult);

        action = {
            type: SET_NEXT_QUESTION,
            payload: 1
        };

        const newExpectedResult: QuizProgressType = {
            currentQuestion: 2
        };

        expect(quizProgressReducer(expectedResult, action)).toEqual(newExpectedResult);
    });

    it('returns correct state after reset progress', () => {
        const currentState: QuizProgressType = {
            currentQuestion: 8
        };

        const action: QuizProgressActionsType = {
            type: RESET_PROGRESS
        };

        const expectedResult: QuizProgressType = {
            currentQuestion: 0
        };

        expect(quizProgressReducer(currentState, action)).toEqual(expectedResult);
    });

    it('returns default state for other actions', () => {
        const currentState: QuizProgressType = getInitialState();

        expect(quizProgressReducer(currentState, {} as QuizProgressActionsType)).toEqual(currentState);
    });
});