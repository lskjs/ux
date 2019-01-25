import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { BsCol, Content, FeatureCallout, Title, ContentItem, Button } from './Callout.styles';

class Callout extends PureComponent {
  render() {
    return (
      <FeatureCallout>
        <BsCol md={6} />
        <div className="container-fluid container-mw-xl">
          <div className="col-12 col-md-6 offset-md-6">
            <Content>
              <Title>Architecto odit fuga facere</Title>
              <ContentItem>
                Culpa eveniet labore cupiditate at maiores dignissimos,
                nesciunt quam porro accusantium velit quas?
                Nam nobis, deleniti inventore consequuntur quos
                vero voluptatum nostrum error porro mollitia,
                accusantium distinctio nemo expedita ipsum quisquam laboriosam
              </ContentItem>
              <Button type="primary">Try it Now</Button>
            </Content>
          </div>
        </div>
      </FeatureCallout>
    );
  }
}
export default Callout;
