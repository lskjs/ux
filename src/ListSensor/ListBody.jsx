import React, { Component } from 'react';
import { css } from 'react-emotion';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import VisibilitySensor from 'react-visibility-sensor';
import Loading from '../Loading';
import Progress from '../Progress';
import T from '../T';
import Button from '../Button';
import { contextToProps } from './List.context';

const buttonStyles = css`
  border-radius: 0;
  box-shadow: 0 0 0 1px #e3e3e3;
  width: 100%;
`;

@contextToProps('List', 'show')
@inject('listStore')
@observer
class ListBody extends Component {
  state = {
    active: false,
  };
  loadMoreData = () => {
    this.setState({ active: true });
    this.props.listStore.fetchMore(1);
  }

  loadDataScroll = (isVisible) => {
    const { active } = this.state;
    if (active && isVisible) {
      this.props.listStore.fetchMore(1);
    }
  }
  render() {
    const {
      List,
      listStore,
      show = {},
      ...props
    } = this.props;
    return (
      <List.BodyWrapper {...props} style={{ position: 'relative' }}>
        {__DEV__ && <Progress isLoading={listStore.loading} value={30} shadow={false} />}
        {/* {__DEV__ && <Progress value={listStore.loading ? 60 : null} />} */}
        {/* <Progress.Bar id="progress" /> */}
        {/* 1) загружаем первый раз
        2) загружаем второй раз, меняя фильтры
        3) загружаем второй раз, меняя skip, фильтры не меняются
        4) до загружаем второй раз, используя fetch next / fetch prev
        */}
        <Loading
          text={null}
          icon={<List.LoaderIcon />}
          disabled={!listStore.loading}
        >
          <If condition={show.more && listStore.canFetchMore(-1)}>
            <Button
              bordered
              size="large"
              paint="default"
              onClick={this.loadMoreData}
              disabled={listStore.loading}
              className={buttonStyles}
              block
            >
              <If condition={listStore.loading}>
                <T name="lskList.bodyLoadingButton" />
              </If>
              <If condition={!listStore.loading}>
                <T name="lskList.bodyLoadMoreButton" />
              </If>
            </Button>
          </If>
          <If condition={listStore.items.length === 0}>
            <List.Empty />
          </If>
          <List.Items />
          <If condition={show.more && listStore.canFetchMore(1)}>
            <VisibilitySensor
              onChange={this.loadDataScroll}
              offset={{ bottom: -200 }}
            >
              <Button
                bordered
                size="large"
                paint="default"
                onClick={this.loadMoreData}
                disabled={listStore.loading}
                className={buttonStyles}
                block
              >
                <If condition={listStore.loading}>
                  <T name="lskList.bodyLoadingButton" />
                </If>
                <If condition={!listStore.loading}>
                  <T name="lskList.loadMoreButton" />
                </If>
              </Button>
            </VisibilitySensor>
          </If>
        </Loading>
      </List.BodyWrapper>
    );
  }
}

export default ListBody;
