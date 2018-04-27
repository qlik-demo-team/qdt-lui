import React from 'react';
import PropTypes from 'prop-types';
import { tooltip } from 'leonardo-ui';

class LuiSearch extends React.Component {
  static propTypes = {
    clear: PropTypes.func.isRequired,
    inverse: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    otherProps: PropTypes.object,
    tooltipDock: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    tooltipContent: PropTypes.string,
    onGo: PropTypes.func,
  };
  static defaultProps = {
    inverse: false,
    placeholder: 'Search',
    otherProps: null,
    tooltipDock: 'top',
    tooltipContent: null,
    onGo: null,
  };

  componentDidMount() {
    const { element } = this;
    const { tooltipDock, tooltipContent } = this.props;
    if (tooltipContent) {
      let myTooltip;
      element.addEventListener('mouseover', () => {
        const options = {
          alignTo: element,
          dock: tooltipDock,
          content: `<span>${tooltipContent}</span>`,
        };
        myTooltip = tooltip(options);
      });
      element.addEventListener('mouseout', () => {
        if (myTooltip) {
          myTooltip.close();
        }
      });
    }
  }

  render() {
    const {
      clear, inverse, placeholder, value, tooltipContent, onGo, ...otherProps
    } = this.props;
    return (
      <div className={(inverse) ? 'lui-search lui-search--inverse' : 'lui-search'} >
        <span className="lui-icon  lui-icon--search  lui-search__search-icon" ref={node => this.element = node} aria-haspopup="true" />
        <input
          className="lui-search__input"
          maxLength="255"
          type="text"
          placeholder={placeholder}
          value={value}
          {...otherProps}
        />
        {!!value.length && (
          <button className="lui-search__clear-button" tabIndex={0} key="clear" onClick={clear}>
            <span className="lui-icon  lui-icon--small  lui-icon--close" ref={node => this.element = node} />
          </button>
        )}
        {!!onGo && (
          <button className="lui-button" style={{ height: 'calc(100% + 2px)' }} onClick={onGo}>Go</button>
        )}
      </div>
    );
  }
}

export default LuiSearch;
