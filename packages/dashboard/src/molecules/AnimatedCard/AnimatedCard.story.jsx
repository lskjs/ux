import React from 'react';
import { Col, Row } from '@lskjs/ui/Grid';
import QueueAnim from 'rc-queue-anim';
import Story from '@lskjs/dev/Story';
import AnimatedCard from './AnimatedCard';


export default ({ storiesOf }) => (
  storiesOf('ui/AnimatedCard', module)
    .add('Default with anim enter', () => (
      <Story style={{ border: 'none' }}>
        <Row>
          <QueueAnim
            type="bottom"
            delay={3000}
            duration={1100}
            style={{ display: 'inline-flex' }}
          >
            <Col key="1" md={4}>
              <AnimatedCard
                src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
              >
                Content
              </AnimatedCard>
            </Col>
            <Col key="2" md={4}>
              <AnimatedCard
                src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
              >
                Content
              </AnimatedCard>
            </Col>
            <Col key="3" md={4}>
              <AnimatedCard
                src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
              >
                Content
              </AnimatedCard>
            </Col>
          </QueueAnim>
        </Row>
      </Story>
    ))
    .add('With custom color', () => (
      <Story>
        <AnimatedCard
          src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
          paint="#FF00FF"
          variant="circle"
        >
          Content
        </AnimatedCard>
      </Story>
    ))
    .add('Top', () => (
      <Story>
        <AnimatedCard
          src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
          paint="#FF00FF"
          variant="top"
        >
          Content
        </AnimatedCard>
      </Story>
    ))
    .add('Bottom', () => (
      <Story>
        <AnimatedCard
          src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
          paint="#FF00FF"
          variant="bottom"
        >
          Content
        </AnimatedCard>
      </Story>
    ))
);
