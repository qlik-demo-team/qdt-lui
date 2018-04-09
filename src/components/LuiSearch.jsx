import React from 'react';
import PropTypes from 'prop-types';

class LuiSearch extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    inverse: PropTypes.bool,
    onClear: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
  };
  static defaultProps = {
    placeholder: 'Search',
    inverse: false,
    onClear: null,
    onChange: null,
    onKeyDown: null,
    onFocus: null,
  };

  state = {
    value: '',
  }

  clear = () => {
    const { onClear } = this.props;
    this.setState({ value: '' });
    if (onClear) onClear();
  };
  change = (event) => {
    const { onChange } = this.props;
    this.setState({ value: event.target.value });
    if (onChange) onChange(event.target.value);
  };
  keyDown = (event) => {
    const { onKeyDown } = this.props;
    if (onKeyDown) onKeyDown(event.key);
    if (event.key === 'enter' || event.key === 'Enter') this.setState({ value: '' });
  };
  focus = () => {
    const { onFocus } = this.props;
    if (onFocus) onFocus();
  };

  render() {
    const { placeholder, inverse } = this.props;

    return (
      <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} >
        <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
        <input
          className="lui-search__input"
          maxLength="255"
          type="text"
          placeholder={placeholder}
          onChange={this.change}
          onKeyDown={this.keyDown}
          onFocus={this.focus}
          value={this.state.value}
        />
        <button className="lui-search__clear-button" tabIndex={0} key="clear" onClick={this.clear}>
          <span className="lui-icon  lui-icon--small  lui-icon--close" />
        </button>
      </div>
    );
  }
}

export default LuiSearch;
