import React from 'react';
import classNames from 'classnames';
import { RightIcon } from '../assets/icons';
import css from './infinite-menu.module.scss';

const InfiniteMenu = ({ className, items, onClick, selected, darkMode = false }) => (
   <ul className={classNames(css.menu_InfiniteMenuTis, {
      [css.Dark_InfiniteMenuTis]: darkMode
   })}>
      {items?.length > 0 &&
         items.map(({ title, items: subItems }) => (
            <li key={title} className={css.item_InfiniteMenuTis}>
               {subItems ? (
                  <div
                     className={classNames(css.subMenuButton_InfiniteMenuTis, {
                        [css.selected_InfiniteMenuTis]: subItems.filter(subItem => subItem?.title === selected)?.length > 0,
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
                     <RightIcon className={css.arrowIcon_InfiniteMenuTis} />
                  </div>
               ) : (
                  <div
                     className={classNames(css.link_InfiniteMenuTis, {
                        [css.selected_InfiniteMenuTis]: selected === title,
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
