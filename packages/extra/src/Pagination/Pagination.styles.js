import React, { FC } from 'react';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  padding: 1rem 0;
`;

export const Ul= styled.ul`
  list-style: none; 
  margin: 0; padding: 0;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 0 .3rem;
`;

export const PaginationBtn = styled.button`
  display: block;
  background: #fff;
  padding: 10px;
  border-radius: 2px;
  line-height: 20px;
  width: 40px;
  border: ${ (props) => (props.current && !props.disabled) ? '1px solid #1890ff' : '1px solid #d9d9d9' };
  color: ${(props) => {
    if (props.current && !props.disabled) {
      return '#1890ff';
    } else if (props.disabled) {
      return '#736e6e';
    } else {
      return '#000';
    }
  }};
  &:hover{
    color: ${ (props) => (props.disabled) ? '#736e6e' : '#1890ff' }; 
    border: ${ (props) => (props.disabled) ? '1px solid #d9d9d9' : '1px solid #1890ff' };
    cursor: ${ (props) => (props.disabled) ? 'default' : 'pointer' };
  }
  &:focus{
    outline-color: #1890ff;
  }
  svg {
    vertical-align: middle;
  }
`;

export const GoTo = styled.button`
  color: #1890ff;
  background: #fff;
  padding: 10px;
  border-radius: 2px;
  line-height: 20px;
  width: 40px;
  border: 1px solid #d9d9d9;
  &:hover{
    color: #000;
  }
  svg {
    vertical-align: middle;
  }
`;

export const Input = styled.input`
  background: #fff;
  padding: 10px;
  border-radius: 2px;
  line-height: 20px;
  width: 100px;
  border: 1px solid #d9d9d9;
  margin-right: .5rem;
`;

export const Select = styled.select`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 12px .5rem;
  &:hover{
    cursor: pointer;
  }
`;