import { combineReducers } from 'redux';

import quizDataReducer from './quizQuestionsReducer';
import quizProgressReducer from './quizProgressReducer';
import quizAnswersReducer from './quizAnswersReducer';

export const rootReducer = combineReducers({
    questions: quizDataReducer,
    progress: quizProgressReducer,
    answers: quizAnswersReducer
});

export default rootReducer;