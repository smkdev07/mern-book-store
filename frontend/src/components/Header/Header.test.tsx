import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

jest.mock('react-redux', () => ({
  useSelector: () => jest.fn(),
  useDispatch: () => jest.fn(),
}));

describe('<Header />', () => {
  it('renders the <Header /> component with a <header> html tag', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('header');
    expect(header).toHaveLength(1);
  });

  it('renders the <Header /> component with Sign In NavLink when the user is not logged in', () => {
    const wrapper = shallow(<Header />);
    const navLink = wrapper.find('NavLink').last();
    expect(navLink.text()).toBe('<FaUser /> Sign In');
  });

  // it('renders the <Header /> component with the user name as the NavDropdown title when the user is logged in', () => {
  //   const wrapper = shallow(<Header />);
  //   const navDropDown = wrapper.find('NavDropdown');
  //   const navDropDownTitle = navDropDown.prop('title');
  //   expect(navDropDownTitle).toBe('Test User');
  // });

  it('renders the <Header /> component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
