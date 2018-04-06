import React from 'react';
import PropTypes from 'prop-types';

const LuiListItem = ({ children }) => (
  <li className="lui-list__item">
    <span className="lui-list__text">{children}</span>
  </li>
);
LuiListItem.propTypes = {
  children: PropTypes.node,
};
LuiListItem.defaultProps = {
  children: null,
};

export default LuiListItem;
