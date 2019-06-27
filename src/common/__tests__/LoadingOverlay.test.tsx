import * as React from 'react';
import { shallow } from 'enzyme';

import { LoadingOverlay } from '../LoadingOverlay';

describe('LoadingOverlay Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(<LoadingOverlay backgroundColor="#000" />);

        expect(component).toMatchSnapshot();

        component.setProps({ size: 'large' });
        expect(component).toMatchSnapshot();
    });
});
