import React from 'react';
import Plus from 'react-icons2/mdi/plus';
import Facebook from 'react-icons2/mdi/facebook-box';
import Twitter from 'react-icons2/mdi/twitter-circle';
import Vk from 'react-icons2/mdi/vk';
import Youtube from 'react-icons2/mdi/youtube';
import Telegram from 'react-icons2/mdi/telegram';
import { Badge, Icon } from 'antd';
import Story from '@lskjs/dev/Story';
import socialColors from '@lskjs/utils/socialColors';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
// import Link from '@lskjs/ui/Link';
import withResponsive from './withResponsive';

const ResponsiveButton = withResponsive(Button);

const icons = {
  facebook : Facebook,
  twitter : Twitter,
  vk : Vk,
  telegram : Telegram,
  youtube : Youtube,
}

export default ({ storiesOf }) => {
  storiesOf('button/Button/alpha', module)
    .add('variants', () => (
      <Story>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
      </Story>
    ))
    .add('size', () => (
      <Story>
        <Button>default</Button>
        <Button size="small">small</Button>
        <Button size="large">large</Button>
        <hr />
        <Button size="small">Smaaaaaaaaaaaaaaaaaaaaal</Button>
      </Story>
    ))
    .add('small', () => (
      <Story />
    ))

    .add('default', () => (
      <Story>
        <Button
          componentClass="a"
          href="/cabinet"
        >
          Link
        </Button>
      </Story>
    ))
    .add('props', () => (
      <Story>
        <Button>Default</Button>
        <Button view="transparent">view=transparent</Button>
        <Button view="text">view=text</Button>
        <Button block>Block button</Button>
        <Button disabled>Disabled button</Button>
        <Button view="empty">Empty primary</Button>
        <Button view="empty" paint="common">Empty common</Button>
        <hr />
        <Button paint="danger">Default</Button>
        <Button paint="danger" view="transparent">view=transparent</Button>
        <Button paint="danger" view="text">view=text</Button>
        <Button paint="danger" block>block</Button>
        <Button paint="danger" disabled>disabled</Button>
        <hr />
        <Button mobileView iconLeft={<Vk />}>mobileView</Button>
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
        {socialColors.map((colors, name) => {
          <Button
            colors={colors}
            size="large"
            block
          >
            {name}
          </Button>
        })}
        <hr />
        <ButtonGroup padded>
          {socialColors.map((colors, name) => {
            <Button
              icon={React.createElement(icons[name])}
              colors={colors} />
          })}
        </ButtonGroup>
      </Story>
    )
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
        <ButtonGroup block>
          <Button>Default</Button>
          <Button paint="primary">Primary</Button>
          <Button paint="info">Info</Button>
          <Button paint="success">Success</Button>
          <Button paint="warning">Warning</Button>
          <Button paint="danger">Danger</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('withResponsive', () => (
      <Story>
        <ResponsiveButton
          paint="primary"
          size="small"
          icon={<Plus />}
        >
          Responsive
        </ResponsiveButton>
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
    ))
    .add('without ripple', () => (
      <Story>
        <Button isRipple={false} paint="primary">Primary</Button>
      </Story>
    ))
    .add('button group', () => (
      <Story>
        <ButtonGroup>
          <Button isRipple={false} paint="primary">Primary</Button>
          <Button isRipple={false} paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('button group panel', () => (
      <Story>
        <ButtonGroup panel>
          <Button paint="primary">Primary</Button>
          <Button paint="danger">Danger</Button>
          <Button paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('button group block', () => (
      <Story>
        <ButtonGroup block>
          <Button paint="primary">Primary</Button>
          <Button paint="primary">Primary</Button>
          <Button paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('button group circle', () => (
      <Story>
        <ButtonGroup>
          <Button icon={<Telegram />} paint="primary" />
          <Button icon={<Facebook />} paint="primary" />
          <Button icon={<Vk />} paint="primary" />
        </ButtonGroup>
      </Story>
    ))
    .add('button group wrapper', () => (
      <Story>
        <ButtonGroup panel>
          <Button paint="primary">Primary</Button>
          <div>
            <Button paint="danger">Danger</Button>
          </div>
          <Button paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('Button with border', () => (
      <Story>
        <Button bordered paint="primary" view="text"> Button with border </Button>
        <br />
        <br />
        <Button bordered borderColor="#fafa" paint="primary" view="text"> Button with custom border </Button>
      </Story>
    ));
};
