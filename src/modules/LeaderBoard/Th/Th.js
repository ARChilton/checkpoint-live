import React from 'react'
import PropTypes from 'prop-types'

const Th = ({ headers }) => (
  headers.map(heading => (
    <th>{heading}</th>
  ))
)

Th.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Th
