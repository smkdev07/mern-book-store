import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders the <Footer /> component with a <footer> html tag', () => {
    const wrapper = shallow(<Footer />);
    const footer = wrapper.find('footer');
    expect(footer).toHaveLength(1);
  });

  it('renders the <Footer /> component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
