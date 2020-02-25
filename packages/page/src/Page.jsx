import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@lskjs/grid';
import collectProps from '@lskjs/utils/collectProps';
import PageHeader from './PageHeader';
import PageTitle from './PageTitle';
import PageBreadcrumbs from './PageBreadcrumbs';
import PageBody from './PageBody';
import PageTabs from './PageTabs';
import PageTitleActions from './PageTitleActions';

import Content, { PageTitleWrapper } from './Page.styles';
import { Provider } from './Page.context';

class Page extends PureComponent {
  static Container = Container;
  static Header = PageHeader;
  static Title = PageTitle;
  static Breadcrumbs = PageBreadcrumbs;
  static TitleActions = PageTitleActions;
  static Body = PageBody;
  static Tabs = PageTabs;
  static Content = Content;
  static PageTitleWrapper = PageTitleWrapper;
  static PageHeaderWrapper = 'div';
  static PageBodyWrapper = 'div';

  render() {
    const { children, container, page, ...props } = this.props;
    let data = children;
    // eslint-disable-next-line no-shadow
    const Page = collectProps(this, [
      'Container',
      'Header',
      'Content',
      'Title',
      'Breadcrumbs',
      'TitleActions',
      'Body',
      'Tabs',
      'PageHeaderWrapper',
      'PageBodyWrapper',
      'PageTitleWrapper',
    ]);
    if (container) {
      data = <Page.Container>{data}</Page.Container>;
    }
    data = <Page.Content {...props}>{data}</Page.Content>;

    return (
      <Provider
        value={{
          Page,
        }}
      >
        {data}
      </Provider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  page: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  container: PropTypes.bool,
};

Page.defaultProps = {
  children: null,
  container: false,
  page: null,
};
export default Page;
