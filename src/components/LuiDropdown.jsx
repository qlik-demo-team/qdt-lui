import React from 'react';
import PropTypes from 'prop-types';

class LuiDropdown extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    gradient: PropTypes.bool,
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
  };
  static defaultProps = {
    children: null,
    gradient: null,
    inverse: null,
    isOpen: false,
    toggle: null,
  };


  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  handleClick = (event) => {
    const outsideClick = !this.node.contains(event.target);
    const { isOpen } = this.props;
    if (isOpen && outsideClick) this.handleToggle();
  }

  handleToggle = () => {
    this.props.toggle();
  }

  render() {
    const {
      children, gradient, inverse, isOpen,
    } = this.props;
    return (
      <div
        ref={node => this.node = node}
        style={{ position: 'relative' }}
      >
        <div
          className={`
              lui-select 
              ${gradient ? 'lui-select--gradient' : null}
              ${inverse ? 'lui-select--inverse' : null}
              ${gradient && inverse ? 'lui-select--gradient-inverse' : null}
            `}
          role="button"
          tabIndex="0"
          onClick={this.handleToggle}
        >
          {children[0]}
        </div>
        <div style={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          width: 'calc(100% - 2px)',
          border: '1px solid #ccc',
        }}
        >
          {children[1]}
        </div>
      </div>
    );
  }
}

export default LuiDropdown;
