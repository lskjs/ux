import React from 'react';
// import FacebookIcon from '~/icons/ic_fb';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import Story from '../Story';

module.exports = ({ storiesOf }) => {
  storiesOf('Button/Solid/Large', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
      <Story>
        <Button size="large">Большая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button size="large" paint="primary">Большая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button size="large" paint="info">Большая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button size="large" paint="success">Большая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button size="large" paint="warning">Большая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button size="large" paint="danger">Большая кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled size="large">Большая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Solid/Default', module)
    .add('Default', () => (
      <Story>
        <Button>Нормальная кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button paint="primary">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button paint="info">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button paint="success">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button paint="warning">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button paint="danger">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="solid">Нормальная кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Solid/Small', module)
    .add('Default', () => (
      <Story>
        <Button size="small">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button size="small" paint="primary">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button size="small" paint="info">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button size="small" paint="success">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button size="small" paint="warning">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button size="small" paint="danger">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="solid" size="small">Маленькая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Text/Large', module)
    .add('Default', () => (
      <Story>
        <Button view="text" size="large">Большая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button view="text" size="large" paint="primary">Большая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button view="text" size="large" paint="info">Большая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button view="text" size="large" paint="success">Большая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button view="text" size="large" paint="warning">Большая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button view="text" size="large" paint="danger">Большая кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="text" size="large">Большая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Text/Default', module)
    .add('Default', () => (
      <Story>
        <Button view="text">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button view="text" paint="primary">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button view="text" paint="info">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button view="text" paint="success">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button view="text" paint="warning">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button view="text" paint="danger">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="text">Нормальная кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Text/Small', module)
    .add('Default', () => (
      <Story>
        <Button view="text" size="small">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button view="text" size="small" paint="primary">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button view="text" size="small" paint="info">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button view="text" size="small" paint="success">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button view="text" size="small" paint="warning">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button view="text" size="small" paint="danger">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="text" size="small">Маленькая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Transparent/Large', module)
    .add('Large', () => (
      <Story>
        <Button view="transparent" size="large">Большая кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="transparent" size="large">Большая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Transparent/Default', module)
    .add('Default', () => (
      <Story>
        <Button view="transparent">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="transparent">Нормальная кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Transparent/Small', module)
    .add('Small', () => (
      <Story>
        <Button view="transparent" size="small">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Disabled', () => (
      <Story>
        <Button disabled view="transparent" size="small">Маленькая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Solid/Large/Full', module)
    .add('Default', () => (
      <Story>
        <Button block size="large">Большая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button block size="large" paint="primary">Большая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button block size="large" paint="info">Большая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button block size="large" paint="success">Большая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button block size="large" paint="warning">Большая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button block size="large" paint="danger">Большая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Solid/Default/Full', module)
    .add('Default', () => (
      <Story>
        <Button block>Нормальная кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button block paint="primary">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button block paint="info">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button block paint="success">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button block paint="warning">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button block paint="danger">Нормальная кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Solid/Small/Full', module)
    .add('Default', () => (
      <Story>
        <Button block size="small">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button block size="small" paint="primary">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button block size="small" paint="info">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button block size="small" paint="success">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button block size="small" paint="warning">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button block size="small" paint="danger">Маленькая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Text/Large/Full', module)
    .add('Default', () => (
      <Story>
        <Button block view="text" size="large">Большая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button block view="text" size="large" paint="primary">Большая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button block view="text" size="large" paint="info">Большая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button block view="text" size="large" paint="success">Большая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button block view="text" size="large" paint="warning">Большая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button block view="text" size="large" paint="danger">Большая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Text/Default/Full', module)
    .add('Default', () => (
      <Story>
        <Button block view="text">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button block view="text" paint="primary">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button block view="text" paint="info">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button block view="text" paint="success">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button block view="text" paint="warning">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button block view="text" paint="danger">Нормальная кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Text/Small/Full', module)
    .add('Default', () => (
      <Story>
        <Button block view="text" size="small">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <Button block view="text" size="small" paint="primary">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Info', () => (
      <Story>
        <Button block view="text" size="small" paint="info">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Success', () => (
      <Story>
        <Button block view="text" size="small" paint="success">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Warning', () => (
      <Story>
        <Button block view="text" size="small" paint="warning">Маленькая кнопка</Button>
      </Story>
    ))
    .add('Danger', () => (
      <Story>
        <Button block view="text" size="small" paint="danger">Маленькая кнопка</Button>
      </Story>
    ));

  storiesOf('Button/Transparent/Full', module)
    .add('Large', () => (
      <Story>
        <Button block view="transparent" size="large">Большая кнопка</Button>
      </Story>
    ))
    .add('Default', () => (
      <Story>
        <Button block view="transparent">Нормальная кнопка</Button>
      </Story>
    ))
    .add('Small', () => (
      <Story>
        <Button block view="transparent" size="small">Маленькая кнопка</Button>
      </Story>
    ));

  // storiesOf('Button/With Icon', module)
  //   .add('Small / Default', () => (
  //    <Button iconLeft={<FacebookIcon />} size="small">Маленькая кнопка</Button>
  //   ))
  //   .add('Small / Primary', () => (
  //    <Button iconLeft={<FacebookIcon />} size="small" paint="primary">Маленькая кнопка</Button>
  //   ))
  //   .add('Small / Info', () => (
  //    <Button iconLeft={<FacebookIcon />} size="small" paint="info">Маленькая кнопка</Button>
  //    ))
  //   .add('Small / Success', () => (
  //     <Button iconLeft={<FacebookIcon />} size="small" paint="success">Маленькая кнопка</Button>
  //   ))
  //   .add('Small / Warning', () => (
  //     <Button iconLeft={<FacebookIcon />} size="small" paint="warning">Маленькая кнопка</Button>
  //   ))
  //   .add('Small / Danger', () => (
  //     <Button iconLeft={<FacebookIcon />} size="small" paint="danger">Маленькая кнопка</Button>
  //   ))
  //   .add('Default', () => (
  //     <Button iconLeft={<FacebookIcon />} paint="primary">Нормальная кнопка</Button>
  //   ))
  //   .add('Large', () => (
  //     <Button iconLeft={<FacebookIcon />} size="large" paint="primary">Большая кнопка</Button>
  //   ))
  //   .add('Right / Default', () => (
  //     <Button iconRight={<FacebookIcon />} paint="primary">Нормальная кнопка</Button>
  //   ))
  //   .add('Right / Large', () => (
  //     <Button iconRight={<FacebookIcon />} size="large" paint="primary">Большая кнопка</Button>
  //   ))
  //   .add('Right / Small', () => (
  //     <Button iconRight={<FacebookIcon />} size="small" paint="primary">Маленькая кнопка</Button>
  //   ))
  //   .add('Double / Default', () => (
  //     <Button iconRight={<FacebookIcon />} iconLeft={<FacebookIcon />} paint="primary">Нормальная кнопка</Button>
  //   ))
  //   .add('Double / Large', () => (
  //     <Button iconRight={<FacebookIcon />} iconLeft={<FacebookIcon />} size="large" paint="primary">
  //       Большая кнопка
  //     </Button>
  //   ))
  //   .add('Double / Small', () => (
  //     <Button iconRight={<FacebookIcon />} iconLeft={<FacebookIcon />} size="small" paint="primary">
  //       Маленькая кнопка
  //     </Button>
  //   ));
};
