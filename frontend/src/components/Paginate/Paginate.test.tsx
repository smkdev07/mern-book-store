import React from 'react';
import { shallow } from 'enzyme';

import Paginate, { PaginateProps } from './Paginate';

const setup = (props: PaginateProps) => {
  return shallow(<Paginate {...props} />);
};

describe('<Paginate />', () => {
  it('renders the <Paginate /> component as null when pages <= 1', () => {
    const wrapper = setup({ page: 1, pages: 1 });
    expect(wrapper.type()).toBeNull();
  });

  it('renders the <Paginate /> component when pages > 1', () => {
    const wrapper = setup({ page: 1, pages: 2 });
    expect(wrapper.find('PageItem')).toHaveLength(2);
  });

  it('renders the <Paginate /> component with page (prop value) set as active', () => {
    const wrapper = setup({ page: 2, pages: 3 });
    const pageItems = wrapper.find('PageItem');
    expect(pageItems.at(0).prop('active')).toBe(false);
    expect(pageItems.at(1).prop('active')).toBe(true);
    expect(pageItems.at(2).prop('active')).toBe(false);
  });

  it('renders the <Paginate /> component with correct <LinkContainer /> to attribute', () => {
    const wrapper = setup({ page: 1, pages: 2 });
    const pageItem = wrapper.find('withRouter(LinkContainer)').first();
    const toPath = pageItem.prop('to');
    expect(toPath).toBe('/page/1');
  });

  it('renders the <Paginate /> component with correct <LinkContainer /> to attribute when isAdmin is true', () => {
    const wrapper = setup({ page: 1, pages: 2, isAdmin: true });
    const pageItem = wrapper.find('withRouter(LinkContainer)').first();
    const toPath = pageItem.prop('to');
    expect(toPath).toBe('/admin/books/page/1');
  });

  it('renders the <Paginate /> component with correct <LinkContainer /> to attribute when keyword is set', () => {
    const wrapper = setup({ page: 1, pages: 2, keyword: 'test' });
    const pageItem = wrapper.find('withRouter(LinkContainer)').first();
    const toPath = pageItem.prop('to');
    expect(toPath).toBe('/search/test/page/1');
  });
});
