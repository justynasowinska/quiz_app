import * as React from 'react';
import { shallow } from 'enzyme';

import { PrimaryButton } from '../PrimaryButton';

describe('PrimaryButton Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <PrimaryButton
                title="Some title"
                onPress={jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
