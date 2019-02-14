import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';
import removeProps from '../../../utils/removeProps';


const dynamicTag = createDynamicTag('div');
const filteredTag = removeProps(dynamicTag, [
  'paint',
]);


export const ACard = styled(filteredTag)`
  border: 1px solid #eaeaea;
  border-radius: 8px;

  position: relative;
  overflow: hidden;
  transition: all .35s ease-in-out;
`;

export const Info = styled('div')`
  box-sizing: border-box;
`;

export const InfoMask = styled('div')`
  content: "";
  position: absolute;
  z-index: 11111;
  background-color: #1890ff !important;
  top: -25%;
  left: 0;
  right: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all .4s cubic-bezier(.4,0,.2,1);
  &:hover {
    opacity: .8;
    transform: scale(1.21);
  }
`;

export const InfoContent = styled('div')`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: scale(.5);
  transition: all .3s ease;
  &:hover {
    opacity: 1;
    transform: scale(1);
  }
`;

export const InfoInner = styled('div')`
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  text-align: center;
`;

