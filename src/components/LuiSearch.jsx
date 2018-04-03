import React from 'react';
import PropTypes from 'prop-types';

const LuiSearch = ({
  placeholder, inverse, onClear, onType,
}) => {
  let inputSearch = null;
  const clear = () => {
    inputSearch.value = '';
    if (onClear) onClear();
  };
  const change = (e) => {
    if (onType) onType(e.key);
  };
  return (
    <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} >
      <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
      <input className="lui-search__input" maxLength="255" type="text" placeholder={placeholder} ref={elem => inputSearch = elem} onKeyPress={change} />
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
  onType: PropTypes.func,
};
LuiSearch.defaultProps = {
  placeholder: 'Search',
  inverse: false,
  onClear: null,
  onType: null,
};

export default LuiSearch;
