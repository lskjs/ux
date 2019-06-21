import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Grid';
import { Provider } from 'mobx-react';
import get from 'lodash/get';
import PageHeader from './components/PageHeader';
import PageTitle from './components/PageTitle';
import PageBreadcrumbs from './components/PageBreadcrumbs';
import PageBody from './components/PageBody';
import PageTabs from './components/PageTabs';
import PageTitleActions from './components/PageTitleActions';

import Content, { PageTitle as PageTitleWrapper } from './Page.styles';

const getProp = (obj, name) => (
  get(obj, `props.${name}`, get(obj, `constructor.${name}`))
);

class Page extends PureComponent {
  static Container = Container;
  static Header = PageHeader;
  static Title = PageTitle;
  static Breadcrumbs = PageBreadcrumbs;
  static TitleActions = PageTitleActions;
  static Body = PageBody;
  static Tabs = PageTabs;
  static PageTitleWrapper = PageTitleWrapper;
  static Content = Content;
  static PageHeaderWrapper = 'div';
  static PageBodyWrapper = 'div';

  static propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    page: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    container: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    container: false,
    page: null,
  }

  render() {
    const {
      children,
      container,
      page,
      ...props
    } = this.props;

    let data = children;
    const Page = {
      Container: getProp(this, 'Container'),
      Header: getProp(this, 'Header'),
      Content: getProp(this, 'Content'),
      Title: getProp(this, 'Title'),
      Breadcrumbs: getProp(this, 'Breadcrumbs'),
      TitleActions: getProp(this, 'TitleActions'),
      Body: getProp(this, 'Body'),
      Tabs: getProp(this, 'Tabs'),
      PageHeaderWrapper: getProp(this, 'PageHeaderWrapper'),
      PageBodyWrapper: getProp(this, 'PageBodyWrapper'),
      PageTitleWrapper: getProp(this, 'PageTitleWrapper'),
    };
    if (container) {
      data = (
        <Container>
          {data}
        </Container>
      );
    }
    data = (
      <Page.Content {...props}>
        {data}
      </Page.Content>
    );
    const providers = {
      Page,
    };
    if (page) {
      providers.page = page;
    }
    return (
      <Provider {...providers}>
        {data}
      </Provider>
    );
  }
}

export default Page;
