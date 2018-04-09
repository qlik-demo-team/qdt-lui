import React from 'react';
import PropTypes from 'prop-types';

const LuiListItem = ({
  children, className, onClick, ...otherProps
}) => (
  <li className={`lui-list__item ${className}`} onClick={onClick} {...otherProps}>
    <span className="lui-list__text">{children}</span>
  </li>
);
LuiListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  otherProps: PropTypes.object,
};
LuiListItem.defaultProps = {
  children: null,
  className: null,
  onClick: null,
  otherProps: null,
};

export default LuiListItem;
