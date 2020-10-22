import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Standard User',
    email: 'standard@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
