import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import '../../css/bootstrap.min.css'
import '../../css/style.css'

import MenuPage from './MenuPage'


const story = storiesOf('MenuPage', module)
story.add('The menu for checkpoint live', withInfo('this will have changing links based on current page')(() => (
  <div style={{
    'background-color': '#eee', position: 'fixed', width: '100%', height: '100%',
  }}
  >
    <div style={{
      width: '300px', position: 'fixed', top: '0px', left: '0px', bottom: '0px',
    }}
    >
      <MenuPage id="menu" menuItems={['sign in', 'sign out', 'adam', 'chilton']} />
    </div>
  </div>
)))
