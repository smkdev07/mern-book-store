import React from 'react';
import { shallow } from 'enzyme';

import FormContainer, { FormContainerProps } from './FormContainer';

const setup = (props: FormContainerProps) => {
  return shallow(<FormContainer {...props} />);
};

describe('<FormContainer />', () => {
  it('renders the <FormContainer /> component with children', () => {
    const childElement = <p>Test Element</p>; // use a more realistic test element
    const wrapper = setup({ children: childElement });
    expect(wrapper).toMatchSnapshot();
  });
});
