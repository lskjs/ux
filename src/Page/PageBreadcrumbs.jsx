import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Breadcrumb from 'antd/lib/breadcrumb';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
// import Container from '../../atoms/PageContainer';
import Breadcrumbs from '../UI/atoms/PageBreadcrumbs';
import Link from '../Link';

@inject('page')
@observer
class PageBreadcrumbs extends Component {
  render() {
    return null;
    const {
      children,
      page,
      reverse,
      omitFirst,
      omitLast,
      items: rawItems,
      ...props
    } = this.props;
    const breadcrumbs = get(page, 'state.meta.show.breadcrumbs', true);
    if (!breadcrumbs) return null;
    let metas = get(page, 'state.metas');
    if (reverse) {
      metas = metas.reverse();
    }

    let items = rawItems ? cloneDeep(rawItems) : metas.map((meta, key) => ({
      key,
      title: meta.title,
      href: meta.url,
    }));
    items = items.slice(omitFirst ? 1 : 0, omitLast ? items.length - 1 : items.length);

    console.log({ items });

    return (
      <Breadcrumbs {...props}>
        {children || (
          <Breadcrumb
            itemRender={(route) => {
              const { title, href } = route;
              if (href) {
                return (
                  <Link href={href}>
                    {title}
                  </Link>
                );
              }
              return (
                <span>
                  {title}
                </span>
              );
            }}
            routes={items}
          />
        )}
      </Breadcrumbs>
    );
  }
}

export default PageBreadcrumbs;
