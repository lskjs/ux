import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import autobind from '@lskjs/autobind';
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

  static propTypes = {
    children: PropTypes.any,
    container: PropTypes.bool,
  }
  static defaultProps = {
    children: null,
    container: false,
  }
  @autobind
  renderBlock(data) {
    return (
      <Block {...omit(this.props, ['children', 'container'])}>
        {data}
      </Block>
    );
  }
  render() {
    const {
      children,
      container,
    } = this.props;

    let data = children;
    if (container) {
      data = (
        <Container>
          {data}
        </Container>
      );
    }
    return this.renderBlock(data);
  }
}

export default Page;
