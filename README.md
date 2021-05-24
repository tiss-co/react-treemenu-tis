# react-treemenu-tis

>

[![NPM](https://img.shields.io/npm/v/react-treemenu-tis.svg)](https://www.npmjs.com/package/react-treemenu-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![react-treemenu-tis Banner](https://user-images.githubusercontent.com/76048512/119355099-1956f400-bcba-11eb-885f-decdd2955bc7.gif)

## Install

```bash
npm i react-treemenu-tis
```

or

```bash
yarn add react-treemenu-tis
```

## Usage

```jsx
import React from 'react'
import { createPortal } from 'react-dom'

import { TreeMenu } from 'react-treemenu-tis'
import 'react-treemenu-tis/dist/index.css'

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
        }
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
        }
      ]
    },
    {
      title: 'Logout'
    }
  ]

  return (
    <TreeMenu
      titleClassName='TreeMenuTitle'
      itemClassName='TreeMenuItem'
      title='Tree Menu'
      items={items}
      onClick={(item) => console.log(`"${item}" selected`)}
      createPortal={createPortal}
      darkMode={false}
    />
  )
}

export default App
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
