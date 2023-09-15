import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    // 正值前进，负值后退
    this.props.history.go(2)
  }
  render() {
    return (
      <div>
         <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>前进两步</button>
      </div>
    )
  }
}

export default withRouter(Header)
