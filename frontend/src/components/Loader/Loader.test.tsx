import React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader';

const setup = () => {
  return shallow(<Loader />);
};

describe('<Loader />', () => {
  it('renders the <Loader /> component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
