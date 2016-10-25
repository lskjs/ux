import { Component } from 'react'
import importcss from 'importcss'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'


@importcss(require('./Slide.css'))
export default class Slide extends Component {
  render() {
    return (
      <div styleName='root'>
        <If condition={this.props.bg}>
          <div styleName='bg' style={{backgroundImage: `url("${this.props.bg}")`}}>
          </div>
        </If>
        <div styleName='content'>
          <Grid>
            <Row>
              <Col xs={12} md={6} mdOffset={3}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
