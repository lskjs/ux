import React from 'react';
import QueueAnim from 'rc-queue-anim';
import range from 'lodash/range';
import Story from '../Story';
import { Container, Row, Col } from '../Grid';
import BlogCard from '../UI/molecules/BlogCard';

export default ({ storiesOf }) => (
  storiesOf('_cases', module)
    .add('show-animation', () => (
      <Story>
        <Container>
          <Row vertical>
            <QueueAnim
              type="bottom"
              delay={3000}
              duration={1100}
            >
              {range(10).map(i => (
                <Col key={i} md={3}>
                  <BlogCard
                    {...{
                    img: 'http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/assets/600_400-1.jpg',
                    date: 'May 1st',
                    title: `Be Yourself ${i}`,
                    content: 'Be yourself; everyone else is already taken.',
                    tag: 'Quotes',
                    author: 'Oscar Wilde',
                  }}
                  />
                </Col>
            ))}
            </QueueAnim>
          </Row>
        </Container>
      </Story>
    ))
    .add('show-animation2', () => (
      <Story>
        <Container>
          <Row vertical>
            {range(20).map(i => (
              <Col key={i} md={3}>
                <BlogCard
                  {...{
                    img: 'http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/assets/600_400-1.jpg',
                    date: 'May 1st',
                    title: `Be Yourself ${i}`,
                    content: 'Be yourself; everyone else is already taken.',
                    tag: 'Quotes',
                    author: 'Oscar Wilde',
                  }}
                  // style={{ width: 280 }}
                />
              </Col>
            ))}

          </Row>
        </Container>
      </Story>
    ))
);
