import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  it('renders the <Header /> component with a <header> html tag', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('header');
    expect(header).toHaveLength(1);
  });

  it('renders nav elements to / : /cart : /login', () => {
    const wrapper = shallow(<Header />);
  })
});
