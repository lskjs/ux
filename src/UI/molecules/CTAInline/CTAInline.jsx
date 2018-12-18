import React, { PureComponent } from 'react';

import { Content, Title, Button } from './CTAInline.styles';

class CTAInline extends PureComponent {
  render() {
    return (
      <Content>
        <Title>Download it now and get up and running in minutes</Title>
        <div>
          <Button type="primary">Let's start</Button>
        </div>
      </Content>
    );
  }
}
export default CTAInline;
