import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Breadcrumb } from 'antd';
// import Container from '../../atoms/PageContainer';
import Title from '../../atoms/PageTitle';
import Breadcrumbs from '../../atoms/PageBreadcrumbs';
import TitleActions from '../../atoms/PageTitleActions';


import Block from './Page.styles';

@inject('page')
@observer
class PageBreadcrumbs extends PureComponent {

  render() {
    const {
      children,
      page,
      ...props
    } = this.props;
    console.log({page});
    
    const items = [
      {
        path: '',
        title: 'Главная',
      },
      {
        path: 'cabinet',
        title: 'Панель управления',
      },
      {
        path: 'events',
        title: 'Мероприятия',
      },
    ];

    let data = children;
    return (
      <Breadcrumbs>
        <Breadcrumb
          itemRender={(route, params, routes, paths) => {
            const last = routes.indexOf(route) === routes.length - 1;
            return last
              ? <span>{route.title}</span>
              : <Link href={`/${paths.join('/')}`}>{route.title}</Link>;
          }}
          routes={items}
        />
        {children}
      </Breadcrumbs>
    );
  }
}

export default Page;
