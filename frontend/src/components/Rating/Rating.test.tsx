import React from 'react';
import { shallow } from 'enzyme';

import Rating, { RatingProps } from './Rating';

const setup = (props: RatingProps) => {
  return shallow(<Rating {...props} />);
};

describe('<Rating />', () => {
  it('renders the <Rating /> component with all empty stars (0 value, default maxValue[5]', () => {
    const wrapper = setup({ value: 0, text: '' });
    expect(wrapper.find('FaRegStar')).toHaveLength(5);
  });

  it('renders the <Rating /> component with all full stars (5 value, default maxValue[5]', () => {
    const wrapper = setup({ value: 5, text: '' });
    expect(wrapper.find('FaStar')).toHaveLength(5);
  });

  it('renders the <Rating /> component with a half star (0.5 value, default maxValue[5]', () => {
    const wrapper = setup({ value: 0.5, text: '' });
    expect(wrapper.find('FaStarHalfAlt')).toHaveLength(1);
  });

  it('renders the <Rating /> component with props text value in <span> element', () => {
    const wrapper = setup({ value: 0, text: 'test' });
    expect(wrapper.find('span').text()).toBe('test');
  });

  it('renders the <Rating /> component with maxValue from props', () => {
    const wrapper = setup({ value: 0, text: '', maxValue: 10 });
    expect(wrapper.find('FaRegStar')).toHaveLength(10);
  });

  it('renders the <Rating /> component with color from props', () => {
    const wrapper = setup({ value: 0, text: '', color: 'red' });
    const stars = wrapper.find('FaRegStar').first();
    const starStyle = stars.prop('style');
    expect(starStyle?.color).toBe('red');
  });
});
