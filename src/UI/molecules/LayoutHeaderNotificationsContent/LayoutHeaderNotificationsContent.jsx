import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';
import Wrapper from './LayoutHeaderNotificationsContent.styles';

class LayoutHeaderNotificationsContent extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.any.isRequired,
    })).isRequired,
  }
  render() {
    const { tabs } = this.props;
    console.log(tabs);
    return (
      <Wrapper>
        <Tabs animated={false}>
          {tabs.map(tab => (
            <Tabs.TabPane
              tab={(
                <span>
                  <If condition={tab.icon}>
                    <Icon type={tab.icon} />
                  </If>
                  {tab.title}
                </span>
              )}
              key={tab.key}
            >
              {tab.content}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Wrapper>
    );
  }
}

export default LayoutHeaderNotificationsContent;
