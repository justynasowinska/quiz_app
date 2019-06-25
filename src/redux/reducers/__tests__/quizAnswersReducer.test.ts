import quizAnswersReducer from '../quizAnswersReducer';
import { ADD_USER_ANSWER, RESET_ANSWERS } from '../../actions/types';
import { QuizAnswersType } from '../../types';
import { QuizAnswersActionsType } from '../../actions/answers';

describe('Quiz Answers Reducer', () => {
    it('returns correct state after add new answer', () => {
        const currentState: QuizAnswersType = [];
        let action: QuizAnswersActionsType = {
            type: ADD_USER_ANSWER,
            payload: {
                questionId: 0,
                answer: 'True'
            }
        };

        const expectedResult: QuizAnswersType = [{
            questionId: 0,
            answer: 'True'
        }];

        expect(quizAnswersReducer(currentState, action)).toEqual(expectedResult);

        action = {
            type: ADD_USER_ANSWER,
            payload: {
                questionId: 1,
                answer: 'False'
            }
        };

        const newExpectedResult = [
            {
                questionId: 0,
                answer: 'True'
            },
            {
                questionId: 1,
                answer: 'False'
            }
        ];

        expect(quizAnswersReducer(expectedResult, action)).toEqual(newExpectedResult);
    });

    it('returns correct state after reset answers', () => {
        const currentState: QuizAnswersType = [];
        const action: QuizAnswersActionsType = {
            type: RESET_ANSWERS
        };

        const expectedResult: QuizAnswersType = [];
        expect(quizAnswersReducer(currentState, action)).toEqual(expectedResult);

        expect(quizAnswersReducer(expectedResult, action)).toEqual([]);
    });

    it('returns default state for other actions', () => {
        const currentState: QuizAnswersType = [];

        expect(quizAnswersReducer(currentState, {} as QuizAnswersActionsType)).toEqual(currentState);
    });
});