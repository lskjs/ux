import { createElement } from 'react';
import PropTypes from 'prop-types';

function createDynamicTag(tag = 'div') {
  const dynamicTag = ({ componentClass, children, ...props }) => {
    return createElement(
      componentClass,
      props,
      children,
    );
  };

  dynamicTag.propTypes = {
    componentClass: PropTypes.any,
    children: PropTypes.any.isRequired,
  };

  dynamicTag.defaultProps = {
    componentClass: tag,
  };

  return dynamicTag;
}

export default createDynamicTag;
