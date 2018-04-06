import React from 'react';
import PropTypes from 'prop-types';

const LuiList = ({ children, inverse }) => (
  <ul className={`
    lui-list
    ${inverse ? 'lui-list--inverse' : null}
  `}
  >
    {children}
  </ul>
);
LuiList.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool,
};
LuiList.defaultProps = {
  children: null,
  inverse: null,
};

export default LuiList;
