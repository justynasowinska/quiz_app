import * as React from 'react';
import { shallow } from 'enzyme';

import { CategoryHeader } from '../CategoryHeader';

describe('Quiz Screen CategoryHeader Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(<CategoryHeader category="History" />);

        expect(component).toMatchSnapshot();
    });
});
