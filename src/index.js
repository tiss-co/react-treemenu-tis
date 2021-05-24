import React, { memo, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { throttle } from 'lodash';

import InfiniteMenu from './infinite-menu';
import PropTypes from 'prop-types';

import { DownIcon } from './assets/icons';

import css from './styles.module.scss';

const { createPortal } = ReactDOM;

export const TreeMenu = memo(({ title, itemClassName, titleClassName, items, onClick, darkMode = false }) => {
  const portal = useRef();
  const button = useRef();

  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [popoverPosition, setPoverPosition] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    const portalDOM = (portal.current = document.createElement('div'));
    portalDOM.id = 'portal';
    document.getElementById('root').appendChild(portalDOM);

    adjustPosition();
    const throttledAdjustPosition = throttle(adjustPosition, 100);
    window.addEventListener('resize', throttledAdjustPosition);

    return () => {
      window.removeEventListener('resize', throttledAdjustPosition);
      portalDOM.remove();
    };
  }, []); // eslint-disable-line

  const toggle = () => setActive(prev => !prev);

  const handleChange = (name, path) => {
    setActive(false);
    onClick && onClick(name, path);
    setSelected(name);
  };

  const hoverEventListeners = {
    onMouseEnter() {
      setHover(true);
    },
    onMouseLeave() {
      setHover(false);
    },
  };

  const adjustPosition = () => {
    const buttonRect = button.current.getBoundingClientRect();
    const overlayNewPosition = {
      top: buttonRect.bottom + window.pageYOffset - 5,
      left: buttonRect.left + window.pageXOffset,
    };
    setPoverPosition(overlayNewPosition);
  };

  return (
    <div>
      <button
        ref={button}
        onClick={toggle}
        className={classNames(css.button, titleClassName)}
        {...hoverEventListeners}
      >
        {title} <DownIcon />
      </button>

      {portal.current &&
        createPortal(
          <React.Fragment>
            {(active || hover) && (
              <nav
                className={css.menuContainer}
                style={{
                  top: popoverPosition.top,
                  left: popoverPosition.left,
                }}
                {...hoverEventListeners}
              >
                <InfiniteMenu
                  items={items}
                  onClick={handleChange}
                  selected={selected}
                  darkMode={darkMode}
                  className={itemClassName}
                />
              </nav>
            )}

            <div
              className={classNames(css.overlay, {
                [css.hide]: !active,
              })}
              onClick={toggle}
            ></div>
          </React.Fragment>,
          portal.current
        )}
    </div>
  );
});

TreeMenu.propTypes = {
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.object,
    })
  ).isRequired,
  onClick: PropTypes.func,
  darkMode: PropTypes.bool
};
