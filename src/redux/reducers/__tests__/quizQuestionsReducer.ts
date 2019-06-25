import quizQuestionsReducer from '../quizQuestionsReducer';
import { QuizQuestionsStateType } from '../../types';
import { UPDATE_QUESTIONS } from '../../actions/types';
import { QuizQuestionsActionsType } from '../../actions/questions';

describe('Quiz Questions Reducer', () => {
    it('returns correct state after update questions', () => {
        const currentState: QuizQuestionsStateType = [];

        const action: QuizQuestionsActionsType = {
            type: UPDATE_QUESTIONS,
            payload: [{
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Unturned originally started as a Roblox game.',
                correct_answer: 'True',
                incorrect_answers: ['False']
            }]
        };

        const expectedResult: QuizQuestionsStateType = [{
            category: 'Entertainment: Video Games',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Unturned originally started as a Roblox game.',
            correct_answer: 'True',
            incorrect_answers: ['False']
        }];

        expect(quizQuestionsReducer(currentState, action)).toEqual(expectedResult);
    });

    it('returns default state for other actions', () => {
        const currentState: QuizQuestionsStateType = [];

        expect(quizQuestionsReducer(currentState, {} as QuizQuestionsActionsType)).toEqual(currentState);
    });
});