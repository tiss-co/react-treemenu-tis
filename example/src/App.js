import React from 'react';

import { TreeMenu } from 'react-treemenu-tis';
import 'react-treemenu-tis/dist/index.css';

const App = () => {

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
        darkMode={false}
      />
    </div>
  );
};

export default App;
