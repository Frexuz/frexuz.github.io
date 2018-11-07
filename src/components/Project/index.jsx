import React from 'react'
import PropTypes from 'prop-types'

import { Button, Tag } from '@components'

const styles = {
  box: {
    borderRadius: 5,
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    marginBottom: 50,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  imgWrapper: {
    padding: 20,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  img: {
    maxHeight: 150,
    maxWidth: 250,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  info: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 900,
    lineHeight: 1.4,
    color: '#fff',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: 20,
    color: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 1.4,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
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

const Project = ({ project }) => (
  <div
    style={{
      ...styles.box,
    }}
  >
    <div style={styles.imgWrapper}>
      <img src={project.logo} alt="" style={styles.img} />
      <div style={styles.overlay}>
        <svg width="46" height="46" viewBox="0 0 24 24">
          <rect
            x="0.75"
            y="0.75"
            width="22.5"
            height="22.5"
            rx="1.5"
            ry="1.5"
            style={styles.stroke}
          />
          <path
            d="M10.238,15.66A.856.856,0,0,1,9,14.894V9.106a.856.856,0,0,1,1.238-.766l5.789,2.895a.855.855,0,0,1,0,1.53Z"
            style={styles.fill}
          />
        </svg>
      </div>
    </div>
    <div style={styles.info}>
      <div style={styles.tags}>
        {project.tags.map(tag => (
          <Tag
            key={`${project.name}Tag${tag}`}
            text={tag}
            style={{ marginRight: 5 }}
          />
        ))}
      </div>
      <h1 style={styles.name}>{project.name}</h1>
      <h2 style={styles.tagLine}>{project.tagLine}</h2>
      {project.text && <h3 style={styles.text}>{project.text}</h3>}
      <div style={styles.footer}>
        {project.buttons &&
          project.buttons.map(button => (
            <Button
              key={`${project.name}Button${button.text}`}
              text={button.text || 'Visit'}
              href={button.href}
              target="_blank"
              style={{ marginRight: 5 }}
            />
          ))}
      </div>
    </div>
  </div>
)

Project.propTypes = {
  project: PropTypes.objectOf(PropTypes.string),
}

export default Project
