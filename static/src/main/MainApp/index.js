import React, { Component } from 'react'
import styles from './styles.css'
import { connect } from 'react-redux'


class MainApp extends Component {

  componentDidMount() {
    console.log('running component did mount')
  }

  render() {
    console.log(this.props)

    return (
      <div className={styles.root}>
        {this.props.message}

        <button onClick={() => window.alert('Hello World')}>
          This button will only work after js runs
        </button>
      </div>
    )
  }

}

export default connect(s => s)(MainApp)
