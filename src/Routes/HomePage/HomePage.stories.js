import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import HomePage from './HomePage'

storiesOf('Home Page', module)
  .add('basic', withInfo('Home page of the app')(() => <HomePage />))
