import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { tooltip } from 'leonardo-ui';

let _tooltip;

const LuiSearch = ({
  clear, inverse, placeholder, value, tooltipDock, tooltipContent, onGo, ...otherProps
}) => {
  const nodeEl = useRef(null);
  useEffect(() => {
    (async () => {
      if (tooltipContent) {
        nodeEl.current.addEventListener('mouseover', () => {
          const options = {
            alignTo: nodeEl,
            dock: tooltipDock,
            content: `<span>${tooltipContent}</span>`,
          };
          _tooltip = tooltip(options);
        });
        nodeEl.current.addEventListener('mouseout', () => {
          if (_tooltip) {
            _tooltip.close();
          }
        });
      }
    })();
    return () => {
      nodeEl.current.removeEventListener('mouseover');
      nodeEl.current.removeEventListener('mouseout');
    };
  }, [tooltipContent, tooltipDock]);

  return (
    <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} ref={nodeEl}>
      <span className="lui-icon  lui-icon--search  lui-search__search-icon" aria-haspopup="true" />
      <input
        className="lui-search__input"
        maxLength="255"
        type="text"
        placeholder={placeholder}
        value={value}
        {...otherProps}
      />
      {!!value.length && (
        <button className="lui-search__clear-button" tabIndex={0} type="button" key="clear" onClick={clear}>
          <span className="lui-icon  lui-icon--small  lui-icon--close" />
        </button>
      )}
      {!!onGo && (
        <button className="lui-button" type="button" style={{ height: 'calc(100% + 2px)' }} onClick={onGo}>Go</button>
      )}
    </div>
  );
};

LuiSearch.propTypes = {
  clear: PropTypes.func.isRequired,
  inverse: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
  tooltipDock: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  tooltipContent: PropTypes.string,
  onGo: PropTypes.func,
};

LuiSearch.defaultProps = {
  inverse: false,
  placeholder: 'Search',
  otherProps: null,
  tooltipDock: 'top',
  tooltipContent: null,
  onGo: null,
};

export default LuiSearch;
