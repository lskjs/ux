import React from 'react';
// import FacebookIcon from '~/icons/ic_fb';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

module.exports = ({ storiesOf }) => {
  storiesOf('Button/Solid/Large', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
      <Button size="large">Большая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button size="large" paint="primary">Большая кнопка</Button>
    ))
    .add('Info', () => (
      <Button size="large" paint="info">Большая кнопка</Button>
    ))
    .add('Success', () => (
      <Button size="large" paint="success">Большая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button size="large" paint="warning">Большая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button size="large" paint="danger">Большая кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled size="large">Большая кнопка</Button>
    ));

  storiesOf('Button/Solid/Default', module)
    .add('Default', () => (
      <Button>Нормальная кнопка</Button>
    ))
    .add('Primary', () => (
      <Button paint="primary">Нормальная кнопка</Button>
    ))
    .add('Info', () => (
      <Button paint="info">Нормальная кнопка</Button>
    ))
    .add('Success', () => (
      <Button paint="success">Нормальная кнопка</Button>
    ))
    .add('Warning', () => (
      <Button paint="warning">Нормальная кнопка</Button>
    ))
    .add('Danger', () => (
      <Button paint="danger">Нормальная кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="solid">Нормальная кнопка</Button>
    ));

  storiesOf('Button/Solid/Small', module)
    .add('Default', () => (
      <Button size="small">Маленькая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button size="small" paint="primary">Маленькая кнопка</Button>
    ))
    .add('Info', () => (
      <Button size="small" paint="info">Маленькая кнопка</Button>
    ))
    .add('Success', () => (
      <Button size="small" paint="success">Маленькая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button size="small" paint="warning">Маленькая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button size="small" paint="danger">Маленькая кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="solid" size="small">Маленькая кнопка</Button>
    ));

  storiesOf('Button/Text/Large', module)
    .add('Default', () => (
      <Button view="text" size="large">Большая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button view="text" size="large" paint="primary">Большая кнопка</Button>
    ))
    .add('Info', () => (
      <Button view="text" size="large" paint="info">Большая кнопка</Button>
    ))
    .add('Success', () => (
      <Button view="text" size="large" paint="success">Большая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button view="text" size="large" paint="warning">Большая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button view="text" size="large" paint="danger">Большая кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="text" size="large">Большая кнопка</Button>
    ));

  storiesOf('Button/Text/Default', module)
    .add('Default', () => (
      <Button view="text">Нормальная кнопка</Button>
    ))
    .add('Primary', () => (
      <Button view="text" paint="primary">Нормальная кнопка</Button>
    ))
    .add('Info', () => (
      <Button view="text" paint="info">Нормальная кнопка</Button>
    ))
    .add('Success', () => (
      <Button view="text" paint="success">Нормальная кнопка</Button>
    ))
    .add('Warning', () => (
      <Button view="text" paint="warning">Нормальная кнопка</Button>
    ))
    .add('Danger', () => (
      <Button view="text" paint="danger">Нормальная кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="text">Нормальная кнопка</Button>
    ));

  storiesOf('Button/Text/Small', module)
    .add('Default', () => (
      <Button view="text" size="small">Маленькая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button view="text" size="small" paint="primary">Маленькая кнопка</Button>
    ))
    .add('Info', () => (
      <Button view="text" size="small" paint="info">Маленькая кнопка</Button>
    ))
    .add('Success', () => (
      <Button view="text" size="small" paint="success">Маленькая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button view="text" size="small" paint="warning">Маленькая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button view="text" size="small" paint="danger">Маленькая кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="text" size="small">Маленькая кнопка</Button>
    ));

  storiesOf('Button/Transparent/Large', module)
    .add('Large', () => (
      <Button view="transparent" size="large">Большая кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="transparent" size="large">Большая кнопка</Button>
    ));

  storiesOf('Button/Transparent/Default', module)
    .add('Default', () => (
      <Button view="transparent">Нормальная кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="transparent">Нормальная кнопка</Button>
    ));

  storiesOf('Button/Transparent/Small', module)
    .add('Small', () => (
      <Button view="transparent" size="small">Маленькая кнопка</Button>
    ))
    .add('Disabled', () => (
      <Button disabled view="transparent" size="small">Маленькая кнопка</Button>
    ));

  storiesOf('Button/Solid/Large/Full', module)
    .add('Default', () => (
      <Button block size="large">Большая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button block size="large" paint="primary">Большая кнопка</Button>
    ))
    .add('Info', () => (
      <Button block size="large" paint="info">Большая кнопка</Button>
    ))
    .add('Success', () => (
      <Button block size="large" paint="success">Большая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button block size="large" paint="warning">Большая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button block size="large" paint="danger">Большая кнопка</Button>
    ));

  storiesOf('Button/Solid/Default/Full', module)
    .add('Default', () => (
      <Button block>Нормальная кнопка</Button>
    ))
    .add('Primary', () => (
      <Button block paint="primary">Нормальная кнопка</Button>
    ))
    .add('Info', () => (
      <Button block paint="info">Нормальная кнопка</Button>
    ))
    .add('Success', () => (
      <Button block paint="success">Нормальная кнопка</Button>
    ))
    .add('Warning', () => (
      <Button block paint="warning">Нормальная кнопка</Button>
    ))
    .add('Danger', () => (
      <Button block paint="danger">Нормальная кнопка</Button>
    ));

  storiesOf('Button/Solid/Small/Full', module)
    .add('Default', () => (
      <Button block size="small">Маленькая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button block size="small" paint="primary">Маленькая кнопка</Button>
    ))
    .add('Info', () => (
      <Button block size="small" paint="info">Маленькая кнопка</Button>
    ))
    .add('Success', () => (
      <Button block size="small" paint="success">Маленькая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button block size="small" paint="warning">Маленькая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button block size="small" paint="danger">Маленькая кнопка</Button>
    ));

  storiesOf('Button/Text/Large/Full', module)
    .add('Default', () => (
      <Button block view="text" size="large">Большая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button block view="text" size="large" paint="primary">Большая кнопка</Button>
    ))
    .add('Info', () => (
      <Button block view="text" size="large" paint="info">Большая кнопка</Button>
    ))
    .add('Success', () => (
      <Button block view="text" size="large" paint="success">Большая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button block view="text" size="large" paint="warning">Большая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button block view="text" size="large" paint="danger">Большая кнопка</Button>
    ));

  storiesOf('Button/Text/Default/Full', module)
    .add('Default', () => (
      <Button block view="text">Нормальная кнопка</Button>
    ))
    .add('Primary', () => (
      <Button block view="text" paint="primary">Нормальная кнопка</Button>
    ))
    .add('Info', () => (
      <Button block view="text" paint="info">Нормальная кнопка</Button>
    ))
    .add('Success', () => (
      <Button block view="text" paint="success">Нормальная кнопка</Button>
    ))
    .add('Warning', () => (
      <Button block view="text" paint="warning">Нормальная кнопка</Button>
    ))
    .add('Danger', () => (
      <Button block view="text" paint="danger">Нормальная кнопка</Button>
    ));

  storiesOf('Button/Text/Small/Full', module)
    .add('Default', () => (
      <Button block view="text" size="small">Маленькая кнопка</Button>
    ))
    .add('Primary', () => (
      <Button block view="text" size="small" paint="primary">Маленькая кнопка</Button>
    ))
    .add('Info', () => (
      <Button block view="text" size="small" paint="info">Маленькая кнопка</Button>
    ))
    .add('Success', () => (
      <Button block view="text" size="small" paint="success">Маленькая кнопка</Button>
    ))
    .add('Warning', () => (
      <Button block view="text" size="small" paint="warning">Маленькая кнопка</Button>
    ))
    .add('Danger', () => (
      <Button block view="text" size="small" paint="danger">Маленькая кнопка</Button>
    ));

  storiesOf('Button/Transparent/Full', module)
    .add('Large', () => (
      <Button block view="transparent" size="large">Большая кнопка</Button>
    ))
    .add('Default', () => (
      <Button block view="transparent">Нормальная кнопка</Button>
    ))
    .add('Small', () => (
      <Button block view="transparent" size="small">Маленькая кнопка</Button>
    ));

  // storiesOf('Button/With Icon', module)
  //   .add('Small / Default', () => (
  //     <Button iconLeft={<FacebookIcon />} size="small">Маленькая кнопка</Button>
  //   ))
  //   .add('Small / Primary', () => (
  //     <Button iconLeft={<FacebookIcon />} size="small" paint="primary">Маленькая кнопка</Button>
  //   ))
  //   .add('Small / Info', () => (
  //     <Button iconLeft={<FacebookIcon />} size="small" paint="info">Маленькая кнопка</Button>
  //   ))
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
