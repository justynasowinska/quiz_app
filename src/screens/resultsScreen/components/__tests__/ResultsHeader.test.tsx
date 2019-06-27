import * as React from 'react';
import { shallow } from 'enzyme';

import { ResultsHeader } from '../ResultsHeader';

describe('Results Screen ResultsHeader Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <ResultsHeader
                results={{ correctAnswers: 20, allQuestions: 23 }}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
