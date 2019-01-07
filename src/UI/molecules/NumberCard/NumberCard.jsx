import React, { PureComponent } from 'react';
import Icon from 'antd/lib/icon';
import {
  Card,
  IconButton,
  BoxNum,
  TextMuted,
} from './NumberCard.styles';

class NumberCard extends PureComponent {
  render() {
    return (
      <Card>
        <IconButton>
          <Icon type="line-chart" />
        </IconButton>
        <div>
          <BoxNum>16 <span>%</span></BoxNum>
          <TextMuted>Growth</TextMuted>
        </div>
      </Card>
    );
  }
}
export default NumberCard;
