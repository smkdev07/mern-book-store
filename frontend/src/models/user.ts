export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token?: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}
