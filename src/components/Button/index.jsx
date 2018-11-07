import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  button: {
    fontWeight: 700,
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 5,
    height: 36,
    padding: '0 20px',
    minWidth: 80,
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
    textTransform: 'uppercase',
  },
}

const Button = ({ text, style, href, target }) => (
  <a href={href} style={{ ...styles.button, ...style }} target={target}>
    {text}
  </a>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}

export default Button
