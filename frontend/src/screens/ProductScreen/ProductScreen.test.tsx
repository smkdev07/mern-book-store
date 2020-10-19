import React from 'react';
import { shallow } from 'enzyme';

import ProductScreen from './ProductScreen';

describe('<ProductScreen />', () => {
  it('renders the <ProductScreen /> component', () => {
    const wrapper = shallow(<ProductScreen />);
  });
});
