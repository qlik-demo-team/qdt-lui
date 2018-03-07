import React from 'react';
import PropTypes from 'prop-types';

const LuiButton = ({
  children, type, color, rounded, active, disabled, block, size,
}) => (
  <button
    className={`
        ${type ? `lui-${type}-button` : 'lui-button'} 
        ${color ? `lui-button--${color}` : null}
        ${rounded ? 'lui-button--rounded' : null}
        ${active ? 'lui-active' : null}
        ${disabled ? 'lui-disabled' : null}
        ${block ? 'lui-button--block' : null}
        ${size ? `lui-button--${size}` : null}
      `}
  >
    {children}
  </button>
);
LuiButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['overlay', 'fade']),
  color: PropTypes.oneOf(['inverse', 'gradient', 'gradient-inverse', 'info', 'danger', 'warning', 'success']),
  rounded: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'x-large']),
};
LuiButton.defaultProps = {
  children: null,
  type: null,
  color: null,
  rounded: null,
  active: null,
  disabled: null,
  block: null,
  size: null,
};

export default LuiButton;
