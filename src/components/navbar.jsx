import React, { PureComponent } from 'react'

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-atlas"></i>
        <span className="title">My Stock Diary</span>
        <span className="count-title">number of stocks</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    )
  }
}

export default Navbar
