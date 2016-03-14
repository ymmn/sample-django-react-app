import React, { Component } from 'react'
import styles from './styles.css'


class RootComponent extends Component {

  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    )
  }

}

export default RootComponent
