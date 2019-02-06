import React from 'react';
import Icon from 'antd/lib/icon';
import ThemeInjector from '../../../ThemeInjector';
import EmptyContainer from './EmptyContainer';

module.exports = ({ storiesOf }) =>
  storiesOf('hz/EmptyContainer', module)
    .add('EmptyContainer', () => {
      return (
        <ThemeInjector>
          <EmptyContainer
            title="Нет событий"
            icon={
              <Icon type="close-circle" />
            }
            subtitle="Тут ничего нет...."
          />
        </ThemeInjector>
      );
    });
