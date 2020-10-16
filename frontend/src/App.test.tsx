import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders the <App /> component without crashing', () => {
  const app = render(<App />);

  expect(app).toBeTruthy();
});
