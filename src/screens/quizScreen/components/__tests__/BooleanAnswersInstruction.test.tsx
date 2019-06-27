import * as React from 'react';
import { shallow } from 'enzyme';

import { BooleanAnswersInstruction } from '../BooleanAnswersInstruction';

describe('Quiz Screen BooleanAnswersInstruction Component', () => {
    it('matches to the snapshot', () => {
        const component = shallow(<BooleanAnswersInstruction />);

        expect(component).toMatchSnapshot();
    });
});
