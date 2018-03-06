import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import SignUpPage from './SignUpPage'
import Provider from '../../stories/Provider'

storiesOf('Sign up Page', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('desktop', withInfo('Users enter their email and create a password')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px',
    }}
    >
      <SignUpPage />

    </div>)))
  .add('tablet', withInfo('Users enter their email and create a password')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '768px', border: '1px solid #000',
    }}
    >
      <SignUpPage />
    </div>)))
  .add('mobile', withInfo('Users enter their email and create a password')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '360px', border: '1px solid #000',
    }}
    >
      <SignUpPage />
    </div>)))
