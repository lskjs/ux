import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';
import { Provider } from 'mobx-react';
// import Container from '../../atoms/PageContainer';
// import Title from '../../atoms/PageTitle';
// import Breadcrumbs from '../../atoms/PageBreadcrumbs';
import PageHeader from './PageHeader';
import PageTitle from './PageTitle';
import PageBreadcrumbs from './PageBreadcrumbs';
import PageBody from './PageBody';
import PageTabs from './PageTabs';
import PageTitleActions from '../UI/atoms/PageTitleActions';

import Block from './Page.styles';

class Page extends PureComponent {
  static Container = Container;
  static Header = PageHeader;
  static Title = PageTitle;
  static Breadcrumbs = props => <PageBreadcrumbs reverse {...props} />;
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
      page,
      ...props
    } = this.props;

    let content = children;

    if (container) {
      content = (
        <Container>
          {content}
        </Container>
      );
    }
    content = (
      <Block {...props}>
        {content}
      </Block>
    );
    if (page) {
      content = (
        <Provider page={page}>
          {content}
        </Provider>
      );
    }
    return content;
  }
}

export default Page;
