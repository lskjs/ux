import React from 'react';
import Story from '../../../Story';
import Container from './Container';
import Left from './Left';
import Item from './Item';
import Right from './Right';
import ItemLeft from './ItemLeft';
import ItemRight from './ItemRight';


export default ({ storiesOf }) => (
  storiesOf('hz/TableFooter', module)
    .add('Default', () => (
      <Story>
        <Container>
          <Left>
            <ItemLeft>buttonbuttonbuttonbuttonbutton</ItemLeft>
            <ItemLeft>button</ItemLeft>
          </Left>
          <Item />
          <Right>
            <ItemRight>stepper-stepper-stepper</ItemRight>
            <ItemRight>pages-pages</ItemRight>
            <ItemRight>paginatorpaginatorpaginatorpaginatorpaginator</ItemRight>
          </Right>
        </Container>
      </Story>
    ))
);
