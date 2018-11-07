import React from 'react'
import PropTypes from 'prop-types'

import { projects } from '@media'
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
    maxWidth: 300,
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
}

const Project = ({ name }) => {
  const project = projects[name]

  return (
    <div
      style={{
        ...styles.box,
      }}
    >
      <div style={styles.imgWrapper}>
        <img src={project.logo} alt="" style={styles.img} />
      </div>
      <div style={styles.info}>
        <div style={styles.tags}>
          {project.tags.map(tag => (
            <Tag
              key={`${name}Tag${tag}`}
              text={tag}
              style={{ marginRight: 5 }}
            />
          ))}
        </div>
        <h1 style={styles.name}>{name}</h1>
        <h2 style={styles.tagLine}>{project.tagLine}</h2>
        {project.text && <h3 style={styles.text}>{project.text}</h3>}
        <div style={styles.footer}>
          {project.buttons &&
            project.buttons.map(button => (
              <Button
                key={`${name}Button${button.text}`}
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
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Project
