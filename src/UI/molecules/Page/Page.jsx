import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from '../../atoms/PageContainer';
import Title from '../../atoms/PageTitle';
import Breadcrumbs from '../../atoms/PageBreadcrumbs';
import TitleActions from '../../atoms/PageTitleActions';

import Block from './Page.styles';

class Page extends PureComponent {
  static Container = Container;
  static Title = Title;
  static Breadcrumbs = Breadcrumbs;
  static TitleActions = TitleActions;
  static propTypes = {
    children: PropTypes.any,
  }
  static defaultProps = {
    children: null,
  }
  render() {
    const {
      children,
      ...props
    } = this.props;
    return (
      <Block {...props}>
        {children}
      </Block>
    );
  }
}

export default Page;
