import React from 'react';
import PropTypes from 'prop-types';

const LuiDialogFooter = ({ children }) => (
  <div className="lui-dialog__footer">
    {children}
  </div>
);

LuiDialogFooter.propTypes = {
  children: PropTypes.node,
};

LuiDialogFooter.defaultProps = {
  children: null,
};

export default LuiDialogFooter;
