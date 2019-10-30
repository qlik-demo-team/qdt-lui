import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const LuiDialog = ({
  children, isOpen, width, handleClose,
}) => {
  const handleKeyUp = (event) => {
    if (event.keyCode === 27) handleClose(event);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <div className="lui-dialog-container" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="lui-modal-background" onClick={handleClose} role="button" tabIndex={0} />
      <div className="lui-dialog" style={{ width }}>
        {children}
      </div>
    </div>
  );
};

LuiDialog.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

LuiDialog.defaultProps = {
  children: null,
  width: '400px',
};

export default LuiDialog;
