import * as React from 'react';
import { shallow } from 'enzyme';

import { ResultsList } from '../ResultsList';

describe('Results Screen ResultsList Component', () => {
    const results = [
        {
            questionId: 0,
            question: 'Unturned originally started as a Roblox game.',
            correct: true,
            correctAnswer: 'True'
        },
        {
            questionId: 1,
            question: 'Unturned originally started as a Roblox game.',
            correct: false,
            correctAnswer: 'False'
        },
        {
            questionId: 3,
            question: 'Unturned originally started as a Roblox game.',
            correct: true,
            correctAnswer: 'False'
        }
    ];

    it('matches to the snapshot', () => {
        const component = shallow(
            <ResultsList
                results={results}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
