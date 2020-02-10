import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import Pre from './Pre.styles';
import P from './Typo.styles';


export default styled(createDynamicTag('article'))`
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
color: rgba(0,0,0,0.8);
font-weight: 400;
box-sizing: inherit;
width: 640px;
${Pre} {
  margin-top: 56px;
}
${P} + ${P}{
  margin-top:   2em;
}

`;
