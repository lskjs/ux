import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Container from 'reactstrap/lib/Container';
// import Container from '../../atoms/PageContainer';
// import Title from '../../atoms/PageTitle';
// import Breadcrumbs from '../../atoms/PageBreadcrumbs';
import PageHeader from './components/PageHeader';
import PageTitle from './components/PageTitle';
import PageBreadcrumbs from './components/PageBreadcrumbs';
import PageBody from './components/PageBody';
import PageTabs from './components/PageTabs';
import PageTitleActions from './components/PageTitleActions';

import Block from './Page.styles';

class Page extends PureComponent {
  static Container = ({ children }) => children;
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
      <Block {...props}>
        {data}
      </Block>
    );
  }
}

export default Page;
