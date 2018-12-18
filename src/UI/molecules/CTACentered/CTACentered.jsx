import React, { PureComponent } from 'react';

import {
  Title,
  Lead,
  Button,
  Muted,
  Wrapper,
} from './CTACentered.styles';

class CTACentered extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="col-md-8 mx-auto">
            <Title>Services We Provide</Title>
            <Lead>Whether you're experiencing a creative block or need assistance in creating a brand for your new business, we're at your service.</Lead>
            <div>
              <Button type="primary">Subscribe</Button>
            </div>
            <Muted>No spam! We promise, only the best stuff.</Muted>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default CTACentered;
