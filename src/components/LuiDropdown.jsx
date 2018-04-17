import React from 'react';
import PropTypes from 'prop-types';

class LuiDropdown extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    gradient: PropTypes.bool,
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool,
    select: PropTypes.bool,
    style: PropTypes.object,
    toggle: PropTypes.func,
  };
  static defaultProps = {
    children: null,
    className: null,
    gradient: null,
    inverse: null,
    isOpen: false,
    select: true,
    style: null,
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
    if (isOpen && outsideClick) this.handleToggle(event);
  }

  handleToggle = (event) => {
    this.props.toggle(event);
  }

  render() {
    const {
      children, className, gradient, inverse, isOpen, select, style,
    } = this.props;
    const [value, menu, ...other] = children;
    return (
      <div
        ref={node => this.node = node}
        className={className}
        style={{ position: 'relative', ...style }}
      >
        <div
          className={`
              ${select ? 'lui-select' : ''} 
              ${gradient ? 'lui-select--gradient' : ''}
              ${inverse ? 'lui-select--inverse' : ''}
              ${gradient && inverse ? 'lui-select--gradient-inverse' : ''}
            `}
          role="button"
          tabIndex="0"
          onClick={this.handleToggle}
        >
          {value}
        </div>
        <div style={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          background: '#fff',
          border: '1px solid #ccc',
          marginTop: 4,
          zIndex: 99999,
          cursor: 'pointer',
        }}
        >
          {menu}
        </div>
        {other}
      </div>
    );
  }
}

export default LuiDropdown;
