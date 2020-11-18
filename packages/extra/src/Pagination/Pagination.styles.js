import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Nav = styled.nav`
  padding: 1rem 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul > li {
    display: inline-block;
    margin: 0 .3rem;
  }
  li > a {
    display: block;
    color: #000;
    background: #fff;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    text-align: center;
    line-height: 20px;
    width: 20px;
    text-decoration: none;
    &:hover{
      color: #1890ff;
      border: 1px solid #1890ff;
    }
  }
  svg {
    vertical-align: middle;
    text-align: center;
  }
`;

export const Li = styled.li`
  a {
    color: ${ (props) => (props.current) ? '#1890ff !important' : 'initial' };
    border: ${ (props) => (props.current) ? '1px solid #1890ff !important' : 'initial' }
  }
`;