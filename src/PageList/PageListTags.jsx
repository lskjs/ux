import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

import { TagsTableWrapper } from './List.styles';

import Button from '../Button';
// import Tag from '~/Uapp/components.v2/molecules/Tag';
const Tag = 'div';

const createDefaultTags = (filter) => {
  return map(filter, (value, field) => ({
    component: Tag, // SimpleTag => <Tag>{value}</Tag>
    value,
    id: field,
  }));
};

@inject('pageStore')
@observer
class PageListTags extends Component {
  static defaultProps = {
    createTags: createDefaultTags,
  }
  render() {
    const {
      createTags,
      pageStore,
    } = this.props;

    if (!pageStore.search &&
      (!pageStore.filter || isEmpty(pageStore.filter))
    ) return null;
    return (
      <TagsTableWrapper >
        {createTags(toJS(pageStore.filter)).map((config) => {
          // console.log({ config });
          const { component, ...tagProps } = config;
          const TagItem = component || Tag;
          return (
            <TagItem
              {...tagProps}
              onClose={(tag) => {
                pageStore.removeTag(tag);
              }}
            />
          );
        })}
        <Button
          size="small"
          paint="primary"
          view="text"
          bordered
          rounded
          onClick={() => {
            pageStore.resetTags();
          }}
        >
          Снять все фильтры
        </Button>
      </TagsTableWrapper>
    );
  }
}

export default PageListTags;
