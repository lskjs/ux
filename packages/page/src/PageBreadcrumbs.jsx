import React from 'react';
import { inject, observer } from 'mobx-react';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import Breadcrumbs from '@lskjs/ui/Breadcrumbs';
import Link from '@lskjs/ui/Link';

const PageBreadcrumbs = ({ children, page, reverse, omitFirst, omitLast, items: rawItems, ...props }) => {
  const breadcrumbs = get(page, 'state.show.breadcrumbs', true);
  if (!breadcrumbs) return null;
  let metas = cloneDeep(get(page, 'state.metas')) || [];

  if (reverse) {
    metas = metas.reverse();
  }
  let items = rawItems
    ? cloneDeep(rawItems)
    : metas.map((meta, key) => ({
        key,
        title: meta.title,
        href: meta.url,
      }));
  items = items.filter((item, i) => {
    if (i === 0 && omitFirst) return false;
    if (i === items.length - 1 && omitLast) return false;
    return true;
  });
  if (items.length) {
    items[items.length - 1] = omit(items[items.length - 1], ['href']);
  }
  if (children) {
    return <Breadcrumbs>{children}</Breadcrumbs>;
  }
  return (
    <Breadcrumbs
      {...props}
      render={item => {
        const { title, href } = item;
        if (!href) return title;
        return <Link href={href}>{title}</Link>;
      }}
      items={items}
    />
  );
};

export default inject('page')(observer(PageBreadcrumbs));
