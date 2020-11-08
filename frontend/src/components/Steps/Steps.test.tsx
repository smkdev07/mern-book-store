import React from 'react';
import { shallow } from 'enzyme';

import Steps, { StepsProps } from './Steps';

const setup = (props: StepsProps) => {
  return shallow(<Steps {...props} />);
};

describe('<Steps />', () => {
  it('renders the <Steps /> component with empty steps array', () => {
    const wrapper = setup({ steps: [] });
    expect(wrapper.find('NavItem')).toHaveLength(0);
  });

  it('renders the <Steps /> component with all active steps', () => {
    const wrapper = setup({
      steps: [
        { name: 'Step 1', path: '/test1', isActive: true },
        { name: 'Step 2', path: 'test2', isActive: true },
      ],
    });
    const navItems = wrapper.find('NavItem');
    navItems.forEach((navItem) => {
      const navLink = navItem.find('NavLink');
      expect(navLink.prop('disabled')).toBe(false);
    });
  });

  it('renders the <Steps /> component with all inactive steps', () => {
    const wrapper = setup({
      steps: [
        { name: 'Step 1', path: '/test1', isActive: false },
        { name: 'Step 2', path: 'test2', isActive: false },
      ],
    });
    const navItems = wrapper.find('NavItem');
    navItems.forEach((navItem) => {
      const navLink = navItem.find('NavLink');
      expect(navLink.prop('disabled')).toBe(true);
    });
  });

  it('renders the <Steps /> component with mixed step active states', () => {
    const wrapper = setup({
      steps: [
        { name: 'Step 1', path: '/test1', isActive: true },
        { name: 'Step 2', path: 'test2', isActive: false },
      ],
    });
    const navItems = wrapper.find('NavItem');
    const firstStep = navItems.find('NavLink').first();
    const lastStep = navItems.find('NavLink').last();
    expect(firstStep.prop('disabled')).toBe(false);
    expect(lastStep.prop('disabled')).toBe(true);
  });

  it('renders the <Steps /> component with valid step name for step from props', () => {
    const wrapper = setup({
      steps: [{ name: 'Step 1', path: '/test1', isActive: true }],
    });
    const navLink = wrapper.find('NavLink');
    expect(navLink.text()).toBe('Step 1');
  });

  it('renders the <Steps /> component with valid step path for step from props', () => {
    const wrapper = setup({
      steps: [{ name: 'Step 1', path: '/test1', isActive: true }],
    });
    const linkContainer = wrapper.find('withRouter(LinkContainer)');
    expect(linkContainer.prop('to')).toBe('/test1');
  });
});
