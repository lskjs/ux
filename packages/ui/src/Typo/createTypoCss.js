import getTheme from '@lskjs/theme/getTheme';

const aligns = ['inherit', 'left', 'right', 'center', 'justify'];
export const excludeProps = [
  'color', 'view', 'width', 'textOverflow', 'align', 'monospace', 'align', 'pre', 'paragraph', 'lineHeight',
];

export default (props) => {
  const view = {
    family: getTheme(props.theme, `font.family.${props.monospace ? 'monospace' : 'base'}`),
    color: (props.color || getTheme(props.theme, 'colors.main')),
    ...(getTheme(props.theme, 'typo.base') || {}),
    ...(getTheme(props.theme, `typo.${props.view}`) || {}),
  };
  let css = `
word-break: break-word;
font-family: ${view.family};
color: ${view.color};
font-size: ${view.size};
font-weight: ${view.weight};
font-style: ${view.style};
font-stretch: ${view.stretch};
line-height: ${view.height};
letter-spacing: ${view.spacing};
margin: ${view.margin};
  `;
  if (props.width) {
    css += `width: ${props.width}px`;
  }
  if (props.textOverflow) {
    css += `
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
  `;
  }
  if (props.align && aligns.include(props.align)) {
    css += `text-align: ${props.align}`;
  }
  if (props.pre) {
    if (props.pre === 'line') {
      css += 'white-space: pre-line;';
    } else if (props.pre === 'wrap') {
      css += 'white-space: pre-wrap;';
    } else {
      css += 'white-space: pre;';
    }
  }
  if (props.paragraph) {
    if (typeof props.paragraph === 'number') {
      css += `margin-bottom: ${props.paragraph}px;`;
    } else {
      css += 'margin-bottom: 24px;';
    }
  }
  if (props.lineHeight) {
    css += `line-height: ${props.lineHeight};`;
  }
  return css;
};
