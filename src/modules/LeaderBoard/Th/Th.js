import React from 'react'
import PropTypes from 'prop-types'

const Th = ({ header }) => (
  header.map(heading => (
    <th>{heading}</th>
  ))
)

Th.propTypes = {
  header: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Th
