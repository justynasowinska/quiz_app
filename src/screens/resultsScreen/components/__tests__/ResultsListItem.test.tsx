import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { ResultsListItem } from '../ResultsListItem';
import { findByTestID } from '../../../../utils/TestingUtils';

describe('Results Screen ResultsListItem Component', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    const results = {
        questionId: 0,
        question: 'Unturned originally started as a Roblox game.',
        correct: true,
        correctAnswer: 'True'
    };

    beforeEach(() => {
        component = shallow(
            <ResultsListItem
                resultsItem={results}
            />
        );
    });

    it('matches to the snapshot', () => {
        expect(component).toMatchSnapshot();

        component.setProps({ resultsItem: { ...results, correct: false } });
        expect(component).toMatchSnapshot();
    });

    it('renders correct answer only when user\'s answer was wrong', () => {
        component.setProps({ resultsItem: { ...results, correct: false } });

        expect(findByTestID(component, 'results_correct_answer')).toHaveLength(1);

        component.setProps({ resultsItem: { ...results, correct: true } });

        expect(findByTestID(component, 'results_correct_answer')).toHaveLength(0);
    });
});
