import React from 'react';
import PropTypes from 'prop-types';
import Tag, { alignEnum, preEnum } from './Typo.styles';

/**
 * Компонент, позволяющий использовать готовые шрифты и начертания.
 */
const Typo = ({ children, ...props }) => (
  <Tag
    {...props}
  >
    {children}
  </Tag>
);

Typo.propTypes = {
  /** Вид */
  view: PropTypes.string,
  // view: PropTypes.oneOf(viewEnum),
  /** Ширина шрифта */
  width: PropTypes.number,
  /** Добавляется отступ снизу */
  paragraph: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /** Задает значение параметру white-space (устанавливает, как отображать пробелы между словами) */
  pre: PropTypes.oneOf(preEnum),
  /** Выравнивание текста */
  align: PropTypes.oneOf(alignEnum),
  /** Цвет текста */
  color: PropTypes.string,
  /** Тело компонента */
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  textOverflow: PropTypes.bool,
};
Typo.defaultProps = {
  view: null,
  children: null,
  paragraph: false,
  pre: null,
  align: null,
  color: null,
  textOverflow: false,
  width: null,
};

export const H1 = (...props) => <Typo tag="h1" view="h1" {...props} />;
export const H2 = (...props) => <Typo tag="h2" view="h2" {...props} />;
export const H3 = (...props) => <Typo tag="h3" view="h3" {...props} />;
export const H4 = (...props) => <Typo tag="h4" view="h4" {...props} />;
export const H5 = (...props) => <Typo tag="h5" view="h5" {...props} />;
export const H6 = (...props) => <Typo tag="h6" view="h6" {...props} />;
export const P = (...props) => <Typo tag="p" view="p" {...props} />;

Typo.H1 = H1;
Typo.H2 = H2;
Typo.H3 = H3;
Typo.H4 = H4;
Typo.H5 = H5;
Typo.H6 = H6;
Typo.P = P;

export default Typo;
