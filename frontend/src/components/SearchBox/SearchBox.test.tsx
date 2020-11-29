import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  it('renders the <SearchBox /> component', () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the <SearchBox /> component with <Form> component', () => {
    const wrapper = shallow(<SearchBox />);
    const form = wrapper.find('Form');
    expect(form).toHaveLength(1);
  });

  it('renders the <SearchBox /> component with <FormControl type="text" /> component', () => {
    const wrapper = shallow(<SearchBox />);
    const formControl = wrapper.find('FormControl').first();
    const formControlType = formControl.prop('type');
    expect(formControlType).toBe('text');
  });

  it('renders the <SearchBox /> component with <Button> component with Label as Search', () => {
    const wrapper = shallow(<SearchBox />);
    const button = wrapper.find('Button').first().text();
    expect(button).toContain('Search');
  });
});
