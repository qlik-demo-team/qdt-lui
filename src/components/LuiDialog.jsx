import React from 'react';
import PropTypes from 'prop-types';

class LuiDialog extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };
  static defaultProps = {
    children: null,
    width: '400px',
  };


  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 27) this.props.handleClose(event);
  }

  render() {
    const {
      children, isOpen, width,
    } = this.props;
    return (
      <div className="lui-dialog-container" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="lui-modal-background" />
        <div className="lui-dialog" style={{ width }}>
          {children}
        </div>
      </div>
    );
  }
}

export default LuiDialog;
