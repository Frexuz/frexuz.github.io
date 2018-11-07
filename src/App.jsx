import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Bio } from './components'

const styles = {
  wrapper: {
    maxWidth: 1200,
    margin: '0 auto',
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
        <Bio />
      </div>
    )
  }
}

export default hot(module)(App)
