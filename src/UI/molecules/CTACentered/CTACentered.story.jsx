import React from 'react';
import CTACentered from './CTACentered';
import ThemeInjector from '../../../ThemeInjector';
import Button from '../../../Button';

const articles = [
  {
    title: 'Что-то пошло не так',
    subtitle: 'Not found: /cabinet/company',
    actions: <Button paint="primary">Вернуться на главную страницу</Button>,
    footer: 'No spam! We promise, only best stuff',
  },
];

export default ({ storiesOf }) => (
  storiesOf('ui/CTACentered', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTACentered {...articles[0]} align="left" />
          <br />
          <br />
          <br />
          <CTACentered {...articles[0]} align="center" />
          <br />
          <br />
          <br />
          <CTACentered {...articles[0]} align="right" />
        </ThemeInjector>
      </div>
    ))
);
