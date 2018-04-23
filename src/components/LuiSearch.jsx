import React from 'react';
import PropTypes from 'prop-types';

const LuiSearch = ({
  clear, inverse, placeholder, value, ...otherProps
}) => {
  const button = (value.length) ? (
    <button className="lui-search__clear-button" tabIndex={0} key="clear" onClick={clear}>
      <span className="lui-icon  lui-icon--small  lui-icon--close" />
    </button>
  ) : '';
  return (
    <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} >
      <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
      <input
        className="lui-search__input"
        maxLength="255"
        type="text"
        placeholder={placeholder}
        value={value}
        {...otherProps}
      />
      { button }
    </div>
  );
};
LuiSearch.propTypes = {
  clear: PropTypes.func.isRequired,
  inverse: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
};
LuiSearch.defaultProps = {
  inverse: false,
  placeholder: 'Search',
  otherProps: null,
};

export default LuiSearch;
