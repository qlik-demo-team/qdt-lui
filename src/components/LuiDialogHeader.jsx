import React from 'react';
import PropTypes from 'prop-types';

const LuiDialogHeader = ({ children }) => (
  <div className="lui-dialog__header">
    <div className="lui-dialog__title">{children}</div>
  </div>
);

LuiDialogHeader.propTypes = {
  children: PropTypes.node,
};

LuiDialogHeader.defaultProps = {
  children: null,
};

export default LuiDialogHeader;
