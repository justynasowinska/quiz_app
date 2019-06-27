import * as React from 'react';
import { shallow } from 'enzyme';

import { QuestionsContainer } from '../QuestionsContainer';
import { QuizQuestionType } from '../../../../redux/types';

describe('Quiz Screen QuestionsContainer Component', () => {
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
            <QuestionsContainer
                questions={questions}
                currentQuestionIndex={0}
                onUserAnswer={jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
