import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ text, style, small }) => {
  const styles = {
    tag: {
      fontWeight: 700,
      color: '#fff',
      backgroundColor: '#cc0178',
      padding: small ? 5 : 7,
      fontSize: small ? 12 : 14,
      borderRadius: 3,
    },
  }

  return (
    <span href="#work" style={{ ...styles.tag, ...style }}>
      {text}
    </span>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
}

export default Tag
