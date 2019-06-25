import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { AppStateType } from '../reducers/appStateType';
import { FETCH_QUESTIONS_BEGIN, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from './types';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export const fetchQuestions = (): ThunkAction<
    void,
    AppStateType,
    null,
    Action<string>
> => {
    return async dispatch => {
        dispatch(fetchQuestionsBegin());

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error('Error during fetching questions');
            }

            const questions = await response.json();

            dispatch(fetchQuestionsSuccess(questions.results));

        } catch (error) {
            dispatch(fetchQuestionsFailure(error));
        }
    };
};

export const fetchQuestionsBegin = () => {
    return <const>{
        type: FETCH_QUESTIONS_BEGIN
    };
};

export const fetchQuestionsSuccess = (questions: any) => {
    return <const>{
        type: FETCH_QUESTIONS_SUCCESS,
        payload: questions
    };
};

export const fetchQuestionsFailure = (error: Error) => {
    return <const>{
        type: FETCH_QUESTIONS_FAILURE,
        payload: error
    };
};

export type QuizQuestionsActionsType =
      ReturnType<typeof fetchQuestionsBegin>
    | ReturnType<typeof fetchQuestionsSuccess>
    | ReturnType<typeof fetchQuestionsFailure>
    ;