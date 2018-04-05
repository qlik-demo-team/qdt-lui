import React from 'react';
import PropTypes from 'prop-types';

/**
 * @extends node-def
 * @typedef {object} node--image-def
 * @property {number} href
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

let inputSearch = null;
const LuiSearch = ({
  placeholder, inverse, onClear, onChange, onKeyDown, onFocus,
}) => {
  const clear = () => {
    inputSearch.value = '';
    if (onClear) onClear();
  };
  const change = () => {
    if (onChange) onChange(inputSearch.value);
  };
  const keyDown = (event) => {
    if (onKeyDown) onKeyDown(event.key);
    if (event.key === 'enter' || event.key === 'Enter') inputSearch.value = '';
  };
  const focus = () => {
    if (onFocus) onFocus();
  };
  return (
    <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} >
      <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
      <input className="lui-search__input" maxLength="255" type="text" placeholder={placeholder} ref={elem => inputSearch = elem} onChange={change} onKeyDown={keyDown} onFocus={focus} />
      <button className="lui-search__clear-button" tabIndex={0} key="clear" onClick={clear}>
        <span className="lui-icon  lui-icon--small  lui-icon--close" />
      </button>
    </div>
  );
};
LuiSearch.propTypes = {
  placeholder: PropTypes.string,
  inverse: PropTypes.bool,
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
};
LuiSearch.defaultProps = {
  placeholder: 'Search',
  inverse: false,
  onClear: null,
  onChange: null,
  onKeyDown: null,
  onFocus: null,
};

export default LuiSearch;
