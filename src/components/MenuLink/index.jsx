import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  link: {
    fontWeight: 900,
    color: '#000',
    textTransform: 'uppercase',
  },
}

const MenuLink = ({ text }) => (
  <a href="#work" style={styles.link}>
    {text}
  </a>
)

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
}

export default MenuLink
