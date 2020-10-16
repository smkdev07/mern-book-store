import React from 'react';
import PropTypes from 'prop-types';

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingProps {
  value: number;
  text: string;
  maxValue?: number;
  color?: string;
}

const getFullStars = (value: number): number[] => {
  return Array(Math.floor(value)).fill(0);
};

const hasHalfStar = (value: number, maxValue: number): boolean => {
  return value - Math.floor(value) >= 0.5 && value !== maxValue;
};

const getEmptyStars = (value: number, maxValue: number): number[] => {
  return Array(Math.floor(maxValue - value)).fill(0);
};

const Rating: React.FC<RatingProps> = ({
  value,
  text,
  maxValue = 5,
  color = '#f8e825',
}) => {
  return (
    <div className="rating">
      {getFullStars(value).map((star, index) => (
        <FaStar key={index} className="mr-1 pb-1" size="1rem" style={{ color }} />
      ))}
      {hasHalfStar(value, maxValue) && (
        <FaStarHalfAlt className="mr-1 pb-1" size="1rem" style={{ color }} />
      )}
      {getEmptyStars(value, maxValue).map((star, index) => (
        <FaRegStar key={index} className="mr-1 pb-1" size="1rem" style={{ color }} />
      ))}
      <span>{text && text}</span>
    </div>
  );
};

// Rating.defaultProps = { maxValue: 5, color: '#f8e825' };

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  color: PropTypes.string,
};

export default Rating;
