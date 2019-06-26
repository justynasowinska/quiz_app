import * as React from 'react';
import { shallow } from 'enzyme';

import { QuizInfo } from '../QuizInfo';

describe('Home Screen Quiz Info Component', () => {
    it('matches to the snapshots', () => {
        const component = shallow(
            <QuizInfo
                questionsNumber={4}
                questionsType="boolean"
            />
        );

        expect(component).toMatchSnapshot();

        component.setProps({ questionsNumber: 54, questionsType: 'multiple' });
        expect(component).toMatchSnapshot();
    });
});