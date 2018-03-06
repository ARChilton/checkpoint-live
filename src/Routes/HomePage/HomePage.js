import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { push } from 'react-router-redux'
import { Page, ProgressBar, ToolbarButton, Icon, Input, Button } from 'react-onsenui'
import Logo from '../../components/Logo/Logo'
import smallLogo from '../../img/icon.svg'
import operationFounderLogo from '../../img/operationFounder.png'
import { toggleSideMenu } from './../splitterState'

export const onsenuiPageListing = {
  signInPage: 'signInPage',
}

const HomePage = ({ menuClick, signInClick, signUpClick }) => (

  <Page id="signInPage">
    <Helmet
      title="signInPage"
    />
    <ProgressBar indeterminate className="hide progressBar" />

    <div id="navBar" className="">

      <div className=" col-xs-2 xsShow txtCenter">
        <ToolbarButton className="menuButton">
          <Icon className="orangeMenuButton" icon="md-menu" onClick={menuClick} />
        </ToolbarButton>
      </div>

      <div className="row txtCenter xsHide">
        <div className="" id="navBarOptions">
          <div className="col-sm-1">
            <img src={smallLogo} alt="Checkpoint Live small logo" />
          </div>
          <div className=" col-sm-2 col-sm-push-7 navActive">
            Home
          </div>
          <a href="/pricing">
            <div className=" col-sm-2 col-sm-push-7">
              Pricing
            </div>
          </a>

        </div>
      </div>
    </div>

    <div>
      <div className="signInFormDiv row">
        <div className="logoBackground">
          <Logo className="loginLogo " id="signInLogo" alt="Checkpoint Live logo" />
        </div>
        <form id="signInForm" className="txtCenter">
          <p>
            <Input id="signInUserName" modifier="underbar" placeholder="Username/email" float className="input70perWidth marginTop32px" />
          </p>
          <p>
            <Input id="signInPassword" modifier="underbar" placeholder="Password" float type="password" className="input70perWidth " />
          </p>
          <p>
            <Button className="signInButton primaryColorButton input70perWidth" onClick={signInClick}>Sign In</Button>
          </p>
          <p>
            <Button className="signUpButton secondaryColorButton maxWidth marginAuto" modifier="large" onClick={signUpClick}>Event Organiser Sign Up</Button>
          </p>
        </form>
      </div>

      <div className="row section sectionGray highlights" id="highlights">
        <div className="col-sm-4" id="safer">
          <Icon icon="fa-users" className="secondaryColor" />
          <h3 className="txtCenter bold">Making events safer</h3>
          <div className="txtJustify">
            <p>
              Receiving updates from all checkpoints simultaneously in real-time means you know which teams were last seen when and where,
              or more importantly which teams {"haven't"} been seen for some time!
            </p>
          </div>
        </div>
        <div className="col-sm-4" id="burden">
          <Icon icon="fa-mobile-phone" className="secondaryColor" />
          <h3 className="txtCenter bold">Monitor on the move</h3>
          <div className="txtJustify">
            <p>
              Designed for use on any mobile device, using Checkpoint Live means you can be on the move and still monitor the event.
            </p>
            <p>
              Need to be flexible during the event? Add new checkpoints for transports or ad-hoc locations and everyone connected to the
              event will be updated.
            </p>
          </div>
        </div>
        <div className="col-sm-4" id="safer">
          <Icon icon="fa-comments" className="secondaryColor" />
          <h3 className="txtCenter bold">Improving communication</h3>
          <div className="txtJustify">
            <p>
              Gone are the days of mishearing via radio or misinterpreting handwriting. Inputs are made by individuals at the checkpoint
              and distributed to everyone in a readable format, in real-time.
            </p>
            <p>With a chat-room included for every event you can contact all of your checkpoint marshals and they can contact
              you, clearly and transparently; no contact information required.
            </p>
          </div>
        </div>
      </div>

      <div className="row section">
        <div className="col-xs-12">
          <h2 className="txtCenter bold">What is Checkpoint Live?</h2>
          <div className="txtJustify col-md-4 col-md-push-2 xsPadding16">
            <p>
              Checkpoint Live was developed initially for the Scout and Guide communities to enable real time updates on where the teams
              of young people are as they participate in orienteering activities. Now it can be used by any event with
              manned checkpoints/bases.
            </p>
            <p>
              Checkpoint Live can be used via the website to record when, where and who visited a specific checkpoint/base. With the added
              ability to record any scores taken at that location.
            </p>
            <p>
              This replaces the need for radio updates or sending messengers to collect records of team sightings from across the countryside.
            </p>
            <p>Importantly for the organisers it removes the data entry into the HQ system as all logs are entered by the
                checkpoints. This data can even be copied into Microsoft Excel&trade;
            </p>
          </div>
        </div>
      </div>

      <div className="row section sectionGray">
        <div className="col-xs-12">
          <h2 className="txtCenter bold">What if I have bad mobile reception?</h2>
          <div className="col-md-4 col-md-push-2 txtJustify xsPadding16">
            <p>Being out in the county-side means there is no guarantee of mobile reception. While this situation is improving,
                Checkpoint Live has taken an {"'offline first'"} approach.
            </p>
            <p>
              Offline first means that this website will continue to work even when your mobile internet signal is intermittent. It does
              this by storing the recorded base logs to your mobile device before synchronising them with other event users
              when the mobile device re-connects to the network.
            </p>
          </div>
        </div>
      </div>

      <div className="row section ">
        <h2 className="txtCenter bold">As used by</h2>
        <div className="xsPadding16 col-xs-12">
          <h2>
            <img src={operationFounderLogo} className="asUsedByLogo" alt="Operation Founder Tonbridge District Scouts Logo" />
          </h2>
        </div>
      </div>

      <div className="row section sectionGray highlights">
        <h2 className="txtCenter bold">New features</h2>
        <div className="col-sm-4">
          <h3 className="bold txtCenter">Branding</h3>
          <p className="txtJustify">You can now add your own logos to your event page to give it that personal feel.</p>
        </div>
        <div className="col-sm-4">
          <h3 className="bold txtCenter">Location tracking</h3>
          <p className="txtJustify">Now you can record location in addition to your standard logs.</p>
        </div>
        <div className="col-sm-4">
          <h3 className="bold txtCenter">Improved admin HQ</h3>
          <p className="txtJustify">Allong with all of the raw logs coming in from checkpoints, checkpoint live will update a last seen (least recent
            at the top) and leaderboard tabs for admin users.
          </p>

        </div>

      </div>


    </div>
    <div className="caption txtRight bottomDiv row">© 2018 Adam Chilton</div>

  </Page>
)

HomePage.propTypes = {
  menuClick: PropTypes.func.isRequired,
}

HomePage.defaultProps = {

}

const mapDispatchToProps = dispatch => ({
  menuClick: () => dispatch(toggleSideMenu(true)),
  signInClick: () => dispatch(push('event-stats')),
})

export default connect(null, mapDispatchToProps)(HomePage)
