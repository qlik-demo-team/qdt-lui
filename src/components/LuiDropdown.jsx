import React from 'react';
import PropTypes from 'prop-types';

class LuiDropdown extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    gradient: PropTypes.bool,
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool,
    style: PropTypes.object,
    toggle: PropTypes.func,
  };
  static defaultProps = {
    children: null,
    className: null,
    gradient: null,
    inverse: null,
    isOpen: false,
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
    if (isOpen && outsideClick) this.handleToggle();
  }

  handleToggle = () => {
    this.props.toggle();
  }

  render() {
    const {
      children, className, gradient, inverse, isOpen, style,
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
              lui-select 
              ${gradient ? 'lui-select--gradient' : null}
              ${inverse ? 'lui-select--inverse' : null}
              ${gradient && inverse ? 'lui-select--gradient-inverse' : null}
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
          width: 'calc(100% - 2px)',
          border: '1px solid #ccc',
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
