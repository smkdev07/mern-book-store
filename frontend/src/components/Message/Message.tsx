import React from 'react';

import { Alert } from 'react-bootstrap';

type AlertVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface MessageProps {
  variant?: AlertVariants;
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ variant = 'info', children }) => (
  <Alert variant={variant}>{children}</Alert>
);

// Message.defaultProps = {
//   variant: 'info',
// };

export default Message;
