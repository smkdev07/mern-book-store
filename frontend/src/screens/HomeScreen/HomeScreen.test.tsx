import React from 'react';
import { shallow } from 'enzyme';

import HomeScreen from './HomeScreen';

describe('<HomeScreen />', () => {
  it('renders the <HomeScreen /> component', () => {
    const wrapper = shallow(<HomeScreen />);
  });
});
