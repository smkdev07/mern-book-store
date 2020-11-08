import React from 'react';
import { shallow } from 'enzyme';

import Book from './Book';

// Original Model
/* const TEST_BOOK = {
  _id: '4',
  name: 'Software Engineering at Google',
  image: '/images/Software Engineering at Google.jpg',
  description:
    'Today, software engineers need to know not only how to program effectively but also how to develop proper engineering practices to make their codebase sustainable and healthy. This book emphasizes this difference between programming and software engineering.',
  authors: 'Titus Winters, Tom Manshreck, Hyrum Wright',
  publishers: "O'Reilly Media",
  isbn: 9781492082798,
  price: 79.99,
  countInStock: 11,
  rating: 5,
  numReviews: 12,
}; */

// Updated Model
const TEST_BOOK = {
  _id: '4',
  __v: 0,
  user: 'Test User',
  name: 'Software Engineering at Google',
  image: '/images/Software Engineering at Google.jpg',
  description:
    'Today, software engineers need to know not only how to program effectively but also how to develop proper engineering practices to make their codebase sustainable and healthy. This book emphasizes this difference between programming and software engineering.',
  authors: 'Titus Winters, Tom Manshreck, Hyrum Wright',
  publishers: "O'Reilly Media",
  isbn: 9781492082798,
  price: 79.99,
  countInStock: 11,
  reviews: [],
  rating: 5,
  numReviews: 12,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const setup = () => {
  return shallow(<Book book={TEST_BOOK} />);
};

describe('<Book />', () => {
  it('renders the <Book /> component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the <Book /> component with the book image from props', () => {
    const wrapper = setup();
    const image = wrapper.find('CardImg').first();
    const imageSrc = image.prop('src');
    expect(imageSrc).toBe(TEST_BOOK.image);
  });

  it('renders the <Book /> component with the book title from props', () => {
    const wrapper = setup();
    const title = wrapper.find('strong').first().text();
    expect(title).toBe(TEST_BOOK.name);
  });

  it('renders the <Book /> component with <Rating /> using value/text from props', () => {
    const wrapper = setup();
    const rating = wrapper.find('Rating').first();
    const ratingProps = rating.props();
    expect(ratingProps).toStrictEqual({
      value: TEST_BOOK.rating,
      text: `${TEST_BOOK.numReviews} reviews`,
    });
  });

  it('renders the <Book /> component with the book price from props', () => {
    const wrapper = setup();
    const price = wrapper.find('CardText').last().text();
    expect(price).toBe(`$${TEST_BOOK.price}`);
  });
});
