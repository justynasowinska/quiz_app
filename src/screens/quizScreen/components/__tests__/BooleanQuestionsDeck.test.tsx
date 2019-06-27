import * as React from 'react';
import { shallow } from 'enzyme';

import { BooleanQuestionsDeck } from '../BooleanQuestionsDeck';
import { QuizQuestionType } from '../../../../redux/types';

describe('Quiz Screen BooleanQuestionsDeck Component', () => {
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
            <BooleanQuestionsDeck
                questions={questions}
                currentQuestionIndex={0}
                onUserAnswer={jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();
    });

    // TODO: Add more tests
});
