import React from 'react';
import { Badge, Icon } from 'antd';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Story from '../Story';

export default ({ storiesOf }) => {
  storiesOf('Button', module)
    .add('paint', () => (
      <Story>
        <Button>Default</Button>
        <Button paint="primary">Primary</Button>
        <Button paint="info">Info</Button>
        <Button paint="success">Success</Button>
        <Button paint="warning">Warning</Button>
        <Button paint="danger">Danger</Button>
      </Story>
    ))
    .add('size', () => (
      <Story>
        <Button paint="primary">default</Button>
        <Button paint="primary" size="small">small</Button>
        <Button paint="primary" size="large">large</Button>
      </Story>
    ))
    .add('props', () => (
      <Story>
        <Button paint="primary" >Default</Button>
        <Button paint="primary" view="transparent" >view=transparent</Button>
        <Button paint="primary" view="text" >view=text</Button>
        <Button paint="primary" block >block</Button>
        <Button paint="primary" disabled >disabled</Button>
      </Story>
    ))
    .add('disabled', () => (
      <Story>
        <Button disabled>Default</Button>
        <Button disabled paint="primary">Primary</Button>
        <Button disabled paint="info">Info</Button>
        <Button disabled paint="success">Success</Button>
        <Button disabled paint="warning">Warning</Button>
        <Button disabled paint="danger">Danger</Button>
      </Story>
    ))
    .add('social', () => (
      <Story>
        <Button
          colors={{
            color: '#fff',
            background: '#f70b00',
            hoverColor: '#fff',
            hoverBackground: '#990801',
            activeColor: '#fff',
            activeBackground: '#990801',
          }}
          size="large"
        >
          Youtube
        </Button>
      </Story>
    ))
    .add('badge', () => (
      <Story>
        <Badge count={5}>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={0} showZero>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={1000} overflowCount={999}>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={109} style={{ backgroundColor: '#52c41a' }}>
          <Button paint="primary">Default</Button>
        </Badge>
      </Story>
    ))
    .add('dot badge', () => (
      <Story>
        <Badge dot>
          <Button paint="primary">Default</Button>
        </Badge>
      </Story>
    ))
    .add('badge with title', () => (
      <Story>
        <Badge count={5} title="Custom hover text">
          <Button paint="primary">Default</Button>
        </Badge>
        <Badge status="processing" count={5} title="Custom hover text">
          <Button paint="primary">Default</Button>
        </Badge>
      </Story>
    ))
    .add('ButtonGroup', () => (
      <Story>
        <ButtonGroup>
          <Button>Default</Button>
          <Button paint="primary">Primary</Button>
          <Button paint="info">Info</Button>
          <Button paint="success">Success</Button>
          <Button paint="warning">Warning</Button>
          <Button paint="danger">Danger</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('badge status', () => (
      <Story>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
      </Story>
    ));
};
