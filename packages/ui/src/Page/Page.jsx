import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Grid';
import PageHeader from './components/PageHeader';
import PageTitle from './components/PageTitle';
import PageBreadcrumbs from './components/PageBreadcrumbs';
import PageBody from './components/PageBody';
import PageTabs from './components/PageTabs';
import PageTitleActions from './components/PageTitleActions';

import Block from './Page.styles';

class Page extends PureComponent {
  static Container = Container;
  static Header = PageHeader;
  static Title = PageTitle;
  static Breadcrumbs = PageBreadcrumbs;
  static TitleActions = PageTitleActions;
  static Body = PageBody;
  static Tabs = PageTabs;
  static Block = Block;

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
      ...props
    } = this.props;

    let data = children;
    if (container) {
      data = (
        <Container>
          {data}
        </Container>
      );
    }
    return (
      <Page.Block {...props}>
        {data}
      </Page.Block>
    );
  }
}

export default Page;
