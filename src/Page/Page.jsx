import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';
import { Provider } from 'mobx-react';
// import Container from '../../atoms/PageContainer';
// import Title from '../../atoms/PageTitle';
import Breadcrumbs from '../UI/atoms/PageBreadcrumbs';
import PageHeader from './PageHeader';
import PageTitle from './PageTitle';
import PageBreadcrumbs from './PageBreadcrumbs';
import PageBody from './PageBody';
import PageTabs from './PageTabs';
import PageTitleActions from '../UI/atoms/PageTitleActions';

import Block, { PageTitle as PageTitleWrapper } from './Page.styles';

class Page extends PureComponent {
  static Container = Container;
  static Content = Block;
  static Header = PageHeader;
  static Title = PageTitle;
  static Breadcrumbs = props => <PageBreadcrumbs reverse {...props} />;
  static TitleActions = PageTitleActions;
  static Body = PageBody;
  static Tabs = PageTabs;
  static PageTitleWrapper = PageTitleWrapper;
  static PageHeaderWrapper = 'div';
  static PageBodyWrapper = 'div';
  static PageBreadcrumbsWrapper = Breadcrumbs;

  static propTypes = {
    children: PropTypes.any,
    container: PropTypes.bool,
  }
  static defaultProps = {
    children: null,
    container: false,
  }
  render() {
    const {
      children,
      container,
      page,
      ...props
    } = this.props;

    let content = children;
    const Page = {
      Container: this.constructor.Container,
      Header: this.constructor.Header,
      Content: this.constructor.Content,
      Title: this.constructor.Title,
      Breadcrumbs: this.constructor.Breadcrumbs,
      TitleActions: this.constructor.TitleActions,
      Body: this.constructor.Body,
      Tabs: this.constructor.Tabs,
      PageHeaderWrapper: this.constructor.PageHeaderWrapper,
      PageBodyWrapper: this.constructor.PageBodyWrapper,
      PageTitleWrapper: this.constructor.PageTitleWrapper,
    };
    if (container) {
      content = (
        <Page.Container>
          {content}
        </Page.Container>
      );
    }
    content = (
      <Page.Content {...props}>
        {content}
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
        {content}
      </Provider>
    );
  }
}

export default Page;
