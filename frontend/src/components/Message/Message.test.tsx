import React from 'react';
import { shallow } from 'enzyme';

import Message, { MessageProps } from './Message';

const setup = (props: MessageProps) => {
  return shallow(<Message {...props} />);
};

describe('<Message />', () => {
  it('renders the <Message /> component with default variant', () => {
    const childElement = <p>Test Message</p>;
    const wrapper = setup({ children: childElement });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the <Message /> component with variant from props', () => {
    const variant = 'primary';
    const childElement = <p>Test Message</p>;
    const wrapper = setup({ variant, children: childElement });
    expect(wrapper).toMatchSnapshot();
  });
});
