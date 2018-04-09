import React from 'react';
import PropTypes from 'prop-types';

const LuiListItem = ({ children, onClick }) => (
  <li className="lui-list__item" onClick={onClick}>
    <span className="lui-list__text">{children}</span>
  </li>
);
LuiListItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
LuiListItem.defaultProps = {
  children: null,
  onClick: null
};

export default LuiListItem;
