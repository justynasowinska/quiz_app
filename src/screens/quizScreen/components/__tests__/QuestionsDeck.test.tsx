import * as React from 'react';
import { shallow } from 'enzyme';

import { QuestionsDeck } from '../QuestionsDeck';
import { QuizQuestionType } from '../../../../redux/types';

describe('Quiz Screen QuestionsDeck Component', () => {
    it('matches to the snapshot', () => {
        const questions: ReadonlyArray<QuizQuestionType> = [{
            category: 'Entertainment: Video Games',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Unturned originally started as a Roblox game.',
            correct_answer: 'True',
            incorrect_answers: ['False']
        }];

        const component = shallow(
            <QuestionsDeck
                questions={questions}
                currentQuestionIndex={0}
                onUserAnswer={jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
