import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Page } from 'react-onsenui'
import Logo from '../../components/Logo/Logo'

const debug = require('debug')('checkpointLive-menuPage')

export const ListItems = (props) => {
  const { listItems } = props
  debug(listItems)
  return listItems.map(item => (
    <ListItem tappable>
      {item}
    </ListItem>))
}

const MenuPage = ({ menuItems }) => (
  <Page id="sideMenu">
    <div className="">
      <Logo className="menuTopBoxContent" alt="Checkpoint Live logo" />
    </div>
    <List id="opFounderMenu">
      <ListItems listItems={menuItems} />
    </List>
  </Page>
)

MenuPage.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
}

MenuPage.defaultProps = {
  menuItems: [],
}

export default MenuPage
