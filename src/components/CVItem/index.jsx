import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  item: {
    borderLeft: '4px solid #aaa',
    paddingLeft: 10,
    marginTop: 50,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontSize: 32,
    fontWeight: 900,
    lineHeight: 1.4,
    flex: 1,
  },
}

const CVItem = ({ name, style, startDate, endDate }) => (
  <div style={{ ...styles.item, ...style }}>
    <div style={styles.header}>
      <div style={styles.name}>{name}</div>
      <div style={styles.dates}>{startDate} - {endDate}</div>
    </div>
  </div>
)

CVItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CVItem
