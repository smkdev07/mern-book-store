import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders the <App /> component with a <main> html tag', () => {
    const wrapper = shallow(<App />);
    const main = wrapper.find('main');
    expect(main).toHaveLength(1);
  });

  it('renders the <App /> component with a <Header />', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('Header');
    expect(header).toHaveLength(1);
  });

  it('renders the <App /> component with a <Footer />', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find('Footer');
    expect(footer).toHaveLength(1);
  });
});
