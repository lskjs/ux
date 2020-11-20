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
  color: ${ (props) => (props.current) ? '#1890ff' : '#000' }; 
  border: ${ (props) => (props.current) ? '1px solid #1890ff' : '1px solid #d9d9d9' };
  &:hover{
    color: #1890ff;
    border: 1px solid #1890ff;
  }
  &:focus{
    outline-color: #1890ff;
  }
  svg {
    vertical-align: middle;
  }
`;