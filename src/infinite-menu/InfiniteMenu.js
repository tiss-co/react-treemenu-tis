import React from 'react';
import classNames from 'classnames';
import { RightIcon } from '../assets/icons';
import css from './infinite-menu.module.scss';

const InfiniteMenu = ({ className, items, onClick, selected, darkMode = false }) => (
   <ul className={classNames(css.menu, {
      [css.Dark]: darkMode
   })}>
      {items?.length > 0 &&
         items.map(({ title, items: subItems }) => (
            <li key={title} className={css.item}>
               {subItems ? (
                  <div
                     className={classNames(css.subMenuButton, {
                        [css.selected]: subItems.filter(subItem => subItem?.title === selected)?.length > 0,
                     })}
                  >
                     {title}
                     <InfiniteMenu
                        className={className}
                        items={subItems}
                        onClick={onClick}
                        darkMode={darkMode}
                        selected={selected}
                     />
                     <RightIcon className={css.arrowIcon} />
                  </div>
               ) : (
                  <div
                     className={classNames(css.link, {
                        [css.selected]: selected === title,
                     }, className)}
                     onClick={() => onClick(title)}
                  >
                     {title}
                  </div>
               )}
            </li>
         ))}
   </ul>
);

export default InfiniteMenu;
