import React from 'react';
import { observer } from 'mobx-react';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import Error404 from '@lskjs/ui/SlideContent/icons/error404';
import EmptyContainer from '@lskjs/ui/EmptyContainer';
import { css } from 'emotion';
import cx from 'classnames';
import Story from '@lskjs/dev/Story';
import ListEmpty from '../ListEmpty';
import { Row, Col, ItemRow, ItemCol, createIndex } from '../Table';
import FilterForm from './FilterForm';

import List from '../List';
import DebugListStore from './DebugListStore';
import listStore from './listStore';


class EmptyCustom extends ListEmpty {
  renderTitle() {
    return 'Кастомный тайтл';
  }
  render() {
    return (
      <EmptyContainer
        title={this.renderTitle()}
        icon={
          <Error404 height="200" width="100%" />
        }
        subtitle="СУПЕР КАСТОМНЫЙ САБТАЙТЛ"
        actions={(
          <Button
            paint="primary"
            onClick={() => listStore.fetch()}
          >
            <T name="common.refresh" />
          </Button>
        )}
      />
    );
  }
}

class CustomList extends List {
  static Empty = EmptyCustom;
}

const columns = [60, '1fr', '1fr', 60];

const styleHeight = css`
  height: 100%;
  min-height: 48px;
  align-items: center;
`;

const itemStyle = css`
  padding: 0 12px;
`;

const Item = observer(({ item = {}, index = createIndex() }) => (
  <Row className={cx([styleHeight, itemStyle])}>
    <Col index={index()}>
      {item.id}
    </Col>
    <Col index={index()}>
      {item.title}
    </Col>
    <Col index={index()}>
      {item.role}
    </Col>
    <Col index={index()}>
      {item.rating}
    </Col>
  </Row>
));

const SelectItem = observer(({ item = {}, index = createIndex() }) => (
  <ItemRow>
    <ItemCol index={index()}>
      <List.Checkbox item={item} />
    </ItemCol>
    <ItemCol index={index()}>
      {item.id}
      {' '}
-
      {' '}
      {Math.random()}
    </ItemCol>
    <ItemCol index={index()}>
      {item.title}
    </ItemCol>
    <ItemCol index={index()}>
      {item.role}
    </ItemCol>
  </ItemRow>
));

const HeaderItem = ({ toggleSort, sort = {} }) => (
  <Row className={styleHeight}>
    <Col index={0}>
      <List.SortHeader value={sort.id} onClick={() => toggleSort('id')}>
       id
      </List.SortHeader>
    </Col>
    <Col index={1}>
      name
    </Col>
    <Col index={2}>
      <List.SortHeader value={sort.role} onClick={() => toggleSort('role')}>
       role
      </List.SortHeader>
    </Col>
    <Col index={3}>
      <List.SortHeader value={sort.rating} onClick={() => toggleSort('rating')}>
        rating
      </List.SortHeader>
    </Col>
  </Row>
);


export default ({ storiesOf }) => storiesOf('List/parts', module)
  .add('List.Header', () => (
    <Story>
      <List
        listStore={listStore}
        HeaderItem={HeaderItem}
        FilterForm={FilterForm}
        columns={columns}
      >
        <List.Header />
        <DebugListStore store={listStore} />
      </List>
    </Story>
  ))
  .add('List.Search', () => (
    <Story>
      <List
        listStore={listStore}
      >
        <List.Search />
        <DebugListStore store={listStore} />
      </List>
    </Story>
  ))
  .add('List.Filter', () => (
    <Story>
      <List
        listStore={listStore}
        FilterForm={FilterForm}
      >
        <List.Filter visible />
        <DebugListStore store={listStore} />
      </List>
    </Story>
  ))
  .add('List.Filter x2', () => (
    <Story>
      <List
        listStore={listStore}
        FilterForm={FilterForm}
      >
        <List.Filter visible />
        <List.Filter visible />
        <List.Tags visible />
        <DebugListStore store={listStore} />
      </List>
    </Story>
  ))
  .add('List.Tags', () => (
    <Story>
      <List
        listStore={listStore}
      >
        <List.Tags />
        <DebugListStore store={listStore} />
      </List>
    </Story>
  ))
  .add('List.HeaderRow', () => (
    <Story>
      <List
        listStore={listStore}
        HeaderItem={HeaderItem}
        columns={columns}
      >
        <List.HeaderRow />
        <DebugListStore store={listStore} />
      </List>
    </Story>
  ))
  .add('List.Body', () => (
    <Story>
      <List
        listStore={listStore}
        Item={Item}
        columns={columns}
      >
        <List.Body Item={Item} />
      </List>
      <DebugListStore store={listStore} />
    </Story>
  ))
  .add('List.Checkbox', () => (
    <Story>
      <List
        listStore={listStore}
        Item={SelectItem}
        columns={columns}
      />
      <DebugListStore store={listStore} />
    </Story>
  ))
  .add('List.Footer', () => (
    <Story>
      <List
        listStore={listStore}
      >
        <List.Footer />
      </List>
      <DebugListStore store={listStore} />
    </Story>
  ))
  .add('List.Footer x2', () => (
    <Story>
      <List
        listStore={listStore}
      >
        <List.Footer />
        <List.Footer />
      </List>
      <DebugListStore store={listStore} />
    </Story>
  ))
  .add('List.Paginator', () => (
    <Story>
      <List
        listStore={listStore}
      >
        <List.Paginator />
      </List>
      <DebugListStore store={listStore} />
    </Story>
  ))
  .add('List.Empty', () => (
    <Story>
      <List
        listStore={listStore}
      >
        <List.Empty type={1} />
      </List>
      <DebugListStore store={listStore} />
    </Story>
  ))
  .add('List.Empty Custom Text', () => {
    class EmptyCustomTitle extends EmptyCustom {
      renderTitle() {
        return 'Супер кастом тайтл';
      }
    }
    return (
      <Story>
        <CustomList
          listStore={listStore}
          Empty={EmptyCustomTitle}
        />
        <DebugListStore store={listStore} />
      </Story>
    );
  });
