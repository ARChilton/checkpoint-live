import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Th from './Th/Th'
import Tr from './Tr/Tr'
import getLeaderBoardRows from './leaderboardState'

const LeaderBoard = ({ rows, headers }) => (
  <div>
    <Th headers={headers} />
    {rows.map(row => (
      <Tr row={row} />
    ))}
  </div>
)


const mapStateToProps = state => ({
  rows: getLeaderBoardRows(state),
})

LeaderBoard.propTypes = {
  rows: PropTypes.objectOf(PropTypes.object).isRequired,
  headers: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default connect(mapStateToProps)(LeaderBoard)
