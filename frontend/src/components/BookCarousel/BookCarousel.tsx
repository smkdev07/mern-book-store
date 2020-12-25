import React from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../../models/book';

import { Carousel, Image } from 'react-bootstrap';

export interface BookCarouselProps {
  books: Book[];
}

const BookCarousel: React.FC<BookCarouselProps> = ({ books }) => (
  <Carousel pause="hover" className="bg-dark">
    {[...books]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)
      .map((book) => (
        <Carousel.Item key={book._id}>
          <Link to={`/book/${book._id}`}>
            <Image src={book.image} alt={book.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {book.name} (${book.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
  </Carousel>
);
export default BookCarousel;
