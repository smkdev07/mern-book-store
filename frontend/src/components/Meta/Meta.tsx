import React from 'react';

import { Helmet } from 'react-helmet';

export interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = 'Welcome to Book Shop',
  description = 'Find the best books for the cheapest prices.',
  keywords = 'books, publications, content',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keyword" content={keywords} />
  </Helmet>
);

export default Meta;
