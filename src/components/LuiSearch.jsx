import React from 'react';
import PropTypes from 'prop-types';

let inputSearch = null;
const clear = (action) => {
  inputSearch.value = '';
  if (action) action();
};

const LuiSearch = ({ placeholder, inverse, action }) => (
  <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} >
    <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
    <input className="lui-search__input" maxLength="255" spellCheck="false" type="text" placeholder={placeholder} ref={elem => inputSearch = elem} />
    <button className="lui-search__clear-button" tabIndex={0} key="clear" onClick={() => clear(action)}>
      <span className="lui-icon  lui-icon--small  lui-icon--close" />
    </button>
  </div>
);
LuiSearch.propTypes = {
  placeholder: PropTypes.string,
  inverse: PropTypes.bool,
  action: PropTypes.func,
};
LuiSearch.defaultProps = {
  placeholder: 'Search',
  inverse: false,
  action: null,
};

export default LuiSearch;
