import * as React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../Header';

describe('Home Screen Header Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(<Header />);

        expect(component).toMatchSnapshot();
    });
});
