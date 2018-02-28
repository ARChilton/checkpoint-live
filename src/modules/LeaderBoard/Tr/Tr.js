import React from 'react'
import PropTypes from 'prop-types'

const Tr = ({ row }) => (
  rows.map(input => (
    <td>{input}</td>
  ))
)

Tr.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tr
