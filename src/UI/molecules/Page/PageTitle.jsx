import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import get from 'lodash/get';
import Title from '../../atoms/PageTitle';

@inject('page')
@observer
class PageTitle extends PureComponent {
  render() {
    const {
      children,
      page,
      ...props
    } = this.props;
    return (
      <Title {...props}>
        {children || get(page, 'state.meta.title')}
      </Title>
    );
  }
}

export default PageTitle;
