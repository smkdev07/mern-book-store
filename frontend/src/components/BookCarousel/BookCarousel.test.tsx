import React from 'react';
import { shallow } from 'enzyme';

import BookCarousel, { BookCarouselProps } from './BookCarousel';

const mockBooks = [
  {
    _id: 'book1',
    __v: 0,
    user: 'test user',
    name: 'Test Book 1',
    image: 'test book 1 image',
    description: 'test book 1 description',
    authors: 'Test Author',
    publishers: 'Test Publisher',
    isbn: 12345,
    price: 50,
    countInStock: 10,
    reviews: [],
    rating: 2,
    numReviews: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'book2',
    __v: 0,
    user: 'test user',
    name: 'Test Book 2',
    image: 'test book 2 image',
    description: 'test book 2 description',
    authors: 'Test Author',
    publishers: 'Test Publisher',
    isbn: 12345,
    price: 50,
    countInStock: 10,
    reviews: [],
    rating: 4,
    numReviews: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'book3',
    __v: 0,
    user: 'test user',
    name: 'Test Book 3',
    image: 'test book 3 image',
    description: 'test book 3 description',
    authors: 'Test Author',
    publishers: 'Test Publisher',
    isbn: 12345,
    price: 50,
    countInStock: 10,
    reviews: [],
    rating: 3,
    numReviews: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'book4',
    __v: 0,
    user: 'test user',
    name: 'Test Book 4',
    image: 'test book 4 image',
    description: 'test book 4 description',
    authors: 'Test Author',
    publishers: 'Test Publisher',
    isbn: 12345,
    price: 50,
    countInStock: 10,
    reviews: [],
    rating: 5,
    numReviews: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const setup = (props: BookCarouselProps) => {
  return shallow(<BookCarousel {...props} />);
};

describe('<BookCarousel />', () => {
  it('renders the <BookCarousel /> component', () => {
    const wrapper = setup({ books: mockBooks });
    expect(wrapper.find('Carousel')).toHaveLength(1);
  });

  it('renders the <BookCarousel /> component with 3 items', () => {
    const wrapper = setup({ books: mockBooks });
    expect(wrapper.find('CarouselItem')).toHaveLength(3);
  });

  it('renders the <BookCarousel /> component with top rated items', () => {
    const wrapper = setup({ books: mockBooks });
    const itemHeadings = wrapper.find('h2');
    expect(itemHeadings.at(0).text()).toContain(mockBooks[3].name);
    expect(itemHeadings.at(1).text()).toContain(mockBooks[1].name);
    expect(itemHeadings.at(2).text()).toContain(mockBooks[2].name);
  });

  it('renders the <BookCarousel /> component with name and price for item', () => {
    const wrapper = setup({ books: mockBooks.slice(0, 1) });
    const carouselItemHeading = wrapper.find('h2');
    expect(carouselItemHeading.text()).toBe(
      `${mockBooks[0].name} ($${mockBooks[0].price})`
    );
  });

  it('renders the <BookCarousel /> component with image for item', () => {
    const wrapper = setup({ books: mockBooks.slice(0, 1) });
    const carouselItemImage = wrapper.find('Image');
    const imageSrc = carouselItemImage.prop('src');
    const imageAlt = carouselItemImage.prop('alt');
    expect(imageSrc).toBe(mockBooks[0].image);
    expect(imageAlt).toBe(mockBooks[0].name);
  });

  it('renders the <BookCarousel /> component with link to item', () => {
    const wrapper = setup({ books: mockBooks.slice(0, 1) });
    const carouselItemLink = wrapper.find('Link');
    expect(carouselItemLink.prop('to')).toBe(`/book/${mockBooks[0]._id}`);
  });
});
