import React from 'react'
import Players from './Players'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<Players />);
});