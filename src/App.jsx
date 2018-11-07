import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import { projects } from '@media'
import { Bio, CV, Project } from '@components'

const styles = {
  wrapper: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  projects: {
    backgroundColor: '#212121',
    padding: 50,
    flex: 1,
  },
  cv: {
    margin: 50,
    flex: 1,
  },
  sectionText: {
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.4,
    marginBottom: 50,
    color: '#fff',
    textAlign: 'center',
  },
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <section style={styles.left}>
          <Bio />
          <div style={styles.cv}>
            <h2 style={{ ...styles.sectionText, ...{ color: '#000' } }}>
              Working experience
            </h2>
            <CV />
          </div>
        </section>
        <section style={styles.projects}>
          <h2 style={styles.sectionText}>Personal projects</h2>
          {projects.map(project => (
            <Project key={`Project${project.name}`} project={project} />
          ))}
        </section>
      </div>
    )
  }
}

export default hot(module)(App)
