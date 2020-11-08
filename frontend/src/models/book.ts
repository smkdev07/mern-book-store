// type validation required
export interface Review {
  name: string;
  rating: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface Book {
  _id: string;
  __v: number;
  user: string;
  name: string;
  image: string;
  description: string;
  authors: string;
  publishers: string;
  isbn: number;
  price: number;
  countInStock: number;
  reviews: Review[];
  rating: number;
  numReviews: number;
  createdAt: string;
  updatedAt: string;
}
