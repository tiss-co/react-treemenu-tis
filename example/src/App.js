import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { TreeMenu } from 'react-treemenu-tis';
import 'react-treemenu-tis/dist/index.css';

const App = () => {
  const updateMenu = useRef();

  const items = [
    {
      title: 'Home'
    },
    {
      title: 'Products',
      items: [
        {
          title: 'Product 1'
        },
        {
          title: 'Product 2'
        },
        {
          title: 'Product 3'
        },
      ]
    },
    {
      title: 'Contact us',
      items: [
        {
          title: 'Mail'
        },
        {
          title: 'Phone'
        },
      ]
    },
    {
      title: 'Logout'
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      updateMenu.current({
        title: 'Phone'
      });
    }, 5000);
  }, []);

  return (
    <div className='App'>
      <div className='Title'>
        TreeMenu Tis
      </div>
      <TreeMenu
        titleClassName='TreeMenuTitle'
        itemClassName='TreeMenuItem'
        title='Tree Menu'
        items={items}
        onClick={item => console.log(`"${item}" selected`)}
        createPortal={createPortal}
        darkMode={false}
        updateMenu={updateMenu}
      />
    </div>
  );
};

export default App;
