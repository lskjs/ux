import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Title,
  Content,
  Button,
  Body,
} from './CTABoxed.styles';

class CTABoxed extends PureComponent {
  static propTypes = {
    transparent: PropTypes.bool,
  };
  static defaultProps = {
    transparent: false,
  };
  render() {
    const {
      transparent,
    } = this.props;
    return (
      <Box transparent={transparent} >
        <Body>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Content>
                <Title>Download it now and get up and running in minutes</Title>
                <div>
                  <Button type="primary">{"Let's"} start</Button>
                </div>
              </Content>
            </div>
          </div>
        </Body>
      </Box>
    );
  }
}
export default CTABoxed;
