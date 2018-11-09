import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withBreakpoints } from 'react-breakpoints'

import { Button, Tag } from '@components'

// eslint-disable-next-line react/prefer-stateless-function
class Project extends Component {
  render() {
    const { project } = this.props

    const styles = {
      box: {
        borderRadius: 5,
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      },
      imgWrapper: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      },
      img: {
        maxHeight: 100,
        maxWidth: 250,
        margin: 20,
      },
      tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        justifyContent: 'center',
      },
      info: {
        flex: 1,
        padding: 20,
      },
      tagLine: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1.4,
        color: '#fff',
      },
      text: {
        fontSize: 16,
        lineHeight: 1.4,
        color: '#fff',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 15,
        paddingTop: 0,
      },
      stroke: {
        fill: 'none',
        stroke: '#fff',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1,
      },
      fill: {
        fill: '#fff',
        stroke: 'none',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1,
      },
    }

    return (
      <div style={styles.box}>
        <div style={styles.imgWrapper}>
          {project.video ? (
            <iframe
              title="video"
              width="100%"
              height="200"
              src={project.video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img src={project.logo} alt="" style={styles.img} />
          )}
        </div>
        <div style={styles.info}>
          <div style={styles.tags}>
            {project.tags.map(tag => (
              <Tag
                key={`${project.name}Tag${tag}`}
                text={tag}
                style={{ margin: 2 }}
              />
            ))}
          </div>
          <h2 style={styles.tagLine}>{project.tagLine}</h2>
          {project.text && <h3 style={styles.text}>{project.text}</h3>}
        </div>
        <div style={styles.footer}>
          {project.buttons &&
            project.buttons.map(button => (
              <Button
                key={`${project.name}Button${button.text}`}
                text={button.text || 'Visit'}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: 5, flex: 1 }}
              />
            ))}
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  project: PropTypes.objectOf(PropTypes.string),
}

export default withBreakpoints(Project)
