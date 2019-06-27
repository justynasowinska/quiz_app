import * as React from 'react';
import { shallow } from 'enzyme';

import { QuizStatusBar } from '../QuizStatusBar';

describe('QuizStatusBar Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(<QuizStatusBar />);

        expect(component).toMatchSnapshot();
    });
});
