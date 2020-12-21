import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import { Pagination } from 'react-bootstrap';

export interface PaginateProps {
  page: number;
  pages: number;
  keyword?: string;
  isAdmin?: boolean;
}

const Paginate: React.FC<PaginateProps> = ({
  page,
  pages,
  keyword = '',
  isAdmin = false,
}) =>
  pages > 1 ? (
    <Pagination>
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <LinkContainer
          key={p}
          to={
            isAdmin
              ? `/admin/books/page/${p}`
              : keyword
              ? `/search/${keyword}/page/${p}`
              : `/page/${p}`
          }>
          <Pagination.Item active={p === page}>{p}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  ) : null;

export default Paginate;
