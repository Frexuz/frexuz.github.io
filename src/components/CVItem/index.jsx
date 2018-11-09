import React, { Component } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import PropTypes from 'prop-types'

import { Tag } from '@components'

// eslint-disable-next-line react/prefer-stateless-function
class CVItem extends Component {
  render() {
    const {
      name,
      style,
      dates,
      role,
      texts,
      breakpoints,
      currentBreakpoint,
      tags,
    } = this.props
    const isMobile =
      breakpoints[currentBreakpoint] < breakpoints.tabletLandscape

    const styles = {
      item: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '100%' : '50% 50%',

        padding: '0 0 10px',
        marginTop: 50,
        marginLeft: isMobile ? 0 : 0,
        marginRight: isMobile ? 0 : 0,
        flexDirection: 'row',
      },
      header: {
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        justifyContent: 'flex-start',
        borderRight: `${isMobile ? 0 : 4}px solid #cc0178`,
        borderBottom: `${isMobile ? 4 : 0}px solid #cc0178`,
        padding: isMobile ? '0 0 10px 0' : '0 20px 0 0',
        width: isMobile ? '100%' : 200,
        justifySelf: isMobile ? 'start' : 'end',
        margin: isMobile ? '0 0 20px 0' : '0',
      },
      info: {
        flex: 3,
        marginLeft: isMobile ? 0 : 20,
      },
      list: {
        listStyleType: 'disc',
      },
      tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginLeft: 18,
      },
      name: {
        fontSize: 32,
        fontWeight: 900,
        textAlign: isMobile ? 'left' : 'right',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
      },
      role: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 700,
        textAlign: isMobile ? 'left' : 'right',
        whiteSpace: 'nowrap',
      },
      text: {
        fontSize: 18,
        lineHeight: 1.4,
        display: 'list-item',
        listStyleType: 'disc',
        listStylePosition: 'outside',
        marginLeft: 20,
        paddingLeft: 0,
      },
      dates: {
        color: '#777',
        fontSize: 14,
      },
    }

    return (
      <div style={{ ...styles.item, ...style }}>
        <div style={styles.header}>
          <h2 style={styles.name}>{name}</h2>
          <h3 style={styles.role}>{role}</h3>
          <div style={styles.dates}>{dates}</div>
        </div>
        <div style={styles.info}>
          <ul style={styles.list}>
            {texts.map(text => (
              <li
                key={text}
                style={styles.text}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </ul>
          <div style={styles.tags}>
            {tags &&
              tags.map(text => (
                <Tag
                  key={text}
                  text={text}
                  small
                  style={{ margin: 2, backgroundColor: '#ccc' }}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

CVItem.propTypes = {
  name: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  role: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  breakpoints: PropTypes.string,
  currentBreakpoint: PropTypes.string,
}

export default withBreakpoints(CVItem)
