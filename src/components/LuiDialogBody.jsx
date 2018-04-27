import React from 'react';
import PropTypes from 'prop-types';

const LuiDialogBody = ({ children }) => (
  <div className="lui-dialog__body">
    {children}
  </div>
);

LuiDialogBody.propTypes = {
  children: PropTypes.node,
};

LuiDialogBody.defaultProps = {
  children: null,
};

export default LuiDialogBody;
