import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
)

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Wrapper
