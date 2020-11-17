import React from 'react';
import { shallow } from 'enzyme';
import MarvelAppBar from './marvel-app-bar';

test('renders without crashing', () => {
    shallow(<MarvelAppBar />);
});
