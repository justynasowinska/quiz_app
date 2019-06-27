import * as React from 'react';
import { shallow } from 'enzyme';

import { QuestionCard } from '../QuestionCard';
import { QuizQuestionType } from '../../../../redux/types';

describe('Quiz Screen QuestionCard Component', () => {
    it('matches to the snapshot', () => {
        const question: QuizQuestionType = {
            category: 'Entertainment: Video Games',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Unturned originally started as a Roblox game.',
            correct_answer: 'True',
            incorrect_answers: ['False']
        };

        const component = shallow(<QuestionCard question={question} />);

        expect(component).toMatchSnapshot();
    });
});
