import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import {
  BsCol,
  Content,
  FeatureCallout,
  Title,
  ContentItem,
  Button,
} from './CalloutRight.styles';


class CalloutRight extends PureComponent {
  render() {
    return (
      <FeatureCallout>
        <BsCol md={6} offset-md={6} />
        <div className="container-fluid container-mw-xl">
          <div className="col-12 col-md-6">
            <Content>
              <Title>Commodi molestiae, culpa eveniet</Title>
              <ContentItem>
                Culpa eveniet labore cupiditate at maiores dignissimos,
                nesciunt quam porro accusantium velit quas?
                Nam nobis, deleniti inventore consequuntur quos
                vero voluptatum nostrum error porro mollitia,
                accusantium distinctio nemo expedita ipsum quisquam laboriosam
              </ContentItem>
              <Button type="primary" className="btn-cta">Try it Now</Button>
            </Content>
          </div>
        </div>
      </FeatureCallout>
    );
  }
}
export default CalloutRight;
