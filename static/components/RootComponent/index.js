import React, { Component } from 'react'
import styles from './styles.css'


class RootComponent extends Component {

  componentDidMount() {
    console.log('running component did mount')
  }

  render() {
    return (
      <div className={styles.root}>
        Hello World!

        <button onClick={() => window.alert('Hello World')}>
          This button will only work after js runs
        </button>
      </div>
    )
  }

}

export default RootComponent
