import React from 'react';
import PropTypes from 'prop-types';

const LuiIcon = ({ type }) => (
  <span
    className={`lui-icon  lui-icon--${type}`}
    aria-hidden="true"
  />
);
LuiIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default LuiIcon;
