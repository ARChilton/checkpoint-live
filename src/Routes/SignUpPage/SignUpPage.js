import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { Page, Toolbar, BackButton, Input, Button } from 'react-onsenui'


const SignUpPage = ({ popPage }) => (
  <Page id="signUpPage">
    <Toolbar>
      <div className="left">
        <BackButton onClick={popPage}>Back</BackButton>
      </div>
      <div className="center">
        Create Account
      </div>
    </Toolbar>
    <div className="pageDiv">
      <div className="row txtCenter maxWidth marginAuto">
        <h1>The first step towards managing your event..</h1>
        <div>
          <Input
            id="signUpEmail"
            modifier="underbar"
            placeholder="Email"
            float
            type="email"
            className="fullWidthInput marginTop maxWidth"
            required
          />
          <Input
            id="signUpPassword"
            modifier="underbar"
            placeholder="Password (min 6 characters)"
            float
            className="fullWidthInput marginTop maxWidth"
            required
          />
          <Input
            id="signUpPasswordConfirm"
            modifier="underbar"
            placeholder="Confirm password"
            float
            className="fullWidthInput marginTop maxWidth"
            required
          />
        </div>
      </div>

      <div className="row txtCenter marginAuto maxWidth">
        <p className="marginTop">
          {"That's"} it {"you're"} done.
          <br />
          Go forth and manage your events with ease.
        </p>
        <p>
          <Button modifier="large" className="signUpInputButton secondaryColorButton maxWidth">Create My Account</Button>
        </p>
      </div>
    </div>


  </Page >
)

SignUpPage.propTypes = {
  popPage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  popPage: () => dispatch(goBack()),
})

export default connect(null, mapDispatchToProps)(SignUpPage)
