import React, { Component, Fragment } from 'react';
import Scrollspy from 'react-scrollspy';
import StickyBox from 'react-sticky-box';
import styled from 'react-emotion';

const Block = styled.div`
  width: 80%;
  margin-left: 20%;
`;


const Wrapper = styled.div`
  width: 80%;
  margin-left: 20%;
`;

const SideBar = styled.aside`
  .is-current{
    color: red;
  }
`;

const Li = styled.li`
  width: 80%;
  list-style: none;
`;

const Link = styled.a`
  &:link {
    color: inherit;
    text-decoration: none;
   }
   &:visited {
    color: inherit;
    text-decoration: none;
   }
   &:active {
    color: inherit;
    text-decoration: none;
   } 
`;

export default class Carousel extends Component {
  render() {
    const {
      items,
      className,
      href,
      to,
      ...props
    } = this.props;
    return (
      <Fragment>
        <StickyBox offsetTop={50} >
          <SideBar>
            <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6']} currentClassName="is-current">
              <Li><Link className="links" href="#section-1" onClick="return false;">1 раздел</Link></Li>
              <Li><Link className="links" href="#section-2" onClick="return false;">2 раздел</Link></Li>
              <Li><Link className="links" href="#section-3" onClick="return false;">3 раздел</Link></Li>
              <Li><Link className="links" href="#section-4" onClick="return false;">4 раздел</Link></Li>
              <Li><Link className="links" href="#section-5" onClick="return false;">5 раздел</Link></Li>
              <Li><Link className="links" href="#section-6" onClick="return false;">6 раздел</Link></Li>
            </Scrollspy>
          </SideBar>
        </StickyBox>

        <Wrapper>
          <Block >
            <h2 id="section-1">1 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
          <Block>
            <h2 id="section-2">2 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
          <Block>
            <h2 id="section-3">3 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
          <Block>
            <h2 id="section-4">4 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
          <Block >
            <h2 id="section-1">1 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
          <Block >
            <h2 id="section-5">5 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
          <Block >
            <h2 id="section-6">6 раздел</h2>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Repudiandae sint et expedita distinctio rerum facilis. Illum, qui in ea
              voluptate velit esse quam. Quae ab illo inventore veritatis et voluptates repudiandae sint et harum
              quidem. Dolores eos, qui minus id, quod maxime placeat. Deleniti atque corrupti, quos dolores eos. Ut
              aliquid ex ea commodi autem. Enim ad minima veniam, quis nostrum exercitationem ullam corporis. Soluta
              nobis est laborum et quasi architecto.
            </p>
          </Block>
        </Wrapper>
      </Fragment>
    );
  }
}
