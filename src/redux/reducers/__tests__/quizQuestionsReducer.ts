import quizQuestionsReducer, { getInitialState } from '../quizQuestionsReducer';
import { QuizQuestionsStateType } from '../../types';
import { QuizQuestionsActionsType } from '../../actions/questions';
import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_BEGIN, FETCH_QUESTIONS_FAILURE } from '../../actions/types';

describe('Quiz Questions Reducer', () => {
    it('returns correct state after fetch questions', () => {
        const currentState: QuizQuestionsStateType = getInitialState();

        const action: QuizQuestionsActionsType = {
            type: FETCH_QUESTIONS_SUCCESS,
            payload: [{
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Unturned originally started as a Roblox game.',
                correct_answer: 'True',
                incorrect_answers: ['False']
            }]
        };

        const expectedResult: QuizQuestionsStateType = {
            questions: [{
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Unturned originally started as a Roblox game.',
                correct_answer: 'True',
                incorrect_answers: ['False']
            }],
            loading: false,
            error: null
        };

        expect(quizQuestionsReducer(currentState, action)).toEqual(expectedResult);
    });

    it('returns correct state after begin fetching questions', () => {
        const currentState: QuizQuestionsStateType = getInitialState();
        const action: QuizQuestionsActionsType = {
            type: FETCH_QUESTIONS_BEGIN
        };

        const expectedResult: QuizQuestionsStateType = {
            questions: currentState.questions,
            loading: true,
            error: null
        };

        expect(quizQuestionsReducer(currentState, action)).toEqual(expectedResult);
    });

    it('returns correct state after fetch questions failure', () => {
        const currentState: QuizQuestionsStateType = getInitialState();

        const error = new Error('Error during fetching questions');

        const action: QuizQuestionsActionsType = {
            type: FETCH_QUESTIONS_FAILURE,
            payload: error
        };

        const expectedResult: QuizQuestionsStateType = {
            questions: currentState.questions,
            loading: false,
            error
        };

        expect(quizQuestionsReducer(currentState, action)).toEqual(expectedResult);
    });

    it('returns default state for other actions', () => {
        const currentState: QuizQuestionsStateType = getInitialState();

        expect(quizQuestionsReducer(currentState, {} as QuizQuestionsActionsType)).toEqual(currentState);
    });
});