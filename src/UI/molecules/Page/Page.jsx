import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
// import Container from '../../atoms/PageContainer';
// import Title from '../../atoms/PageTitle';
// import Breadcrumbs from '../../atoms/PageBreadcrumbs';
import Title from './PageTitle';
import Breadcrumbs from './PageBreadcrumbs';
import TitleActions from '../../atoms/PageTitleActions';


import Block from './Page.styles';

class Page extends PureComponent {
  static Container = Container;
  static Title = Title;
  static Body = ({ children }) => children;
  static Breadcrumbs = Breadcrumbs;
  static TitleActions = TitleActions;
  static propTypes = {
    children: PropTypes.any,
    container: PropTypes.boolean,
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
