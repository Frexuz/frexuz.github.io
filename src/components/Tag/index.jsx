import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  tag: {
    fontWeight: 700,
    color: '#fff',
    backgroundColor: '#cc0178',
    padding: 7,
    fontSize: 14,
    borderRadius: 3,
  },
}

const Tag = ({ text, style }) => (
  <span href="#work" style={{ ...styles.tag, ...style }}>
    {text}
  </span>
)

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
}

export default Tag
