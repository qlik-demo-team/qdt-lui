import React from 'react';
import PropTypes from 'prop-types';

const LuiListItem = ({ children, onClick, ...otherProps }) => (
  <li className="lui-list__item" onClick={onClick} {...otherProps}>
    <span className="lui-list__text">{children}</span>
  </li>
);
LuiListItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  otherProps: PropTypes.object,
};
LuiListItem.defaultProps = {
  children: null,
  onClick: null,
  otherProps: null,
};

export default LuiListItem;
