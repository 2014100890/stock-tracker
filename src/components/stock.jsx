import React, { Component } from 'react'

class Stock extends Component {
  state = {
    count: 0,
  }
  handleIncrement = () => {
    // state object 내 count 증가 후 update
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
    const count = this.state.count - 1
    this.setState({ count: count < 0 ? 0 : count })
  }

  render() {
    const { name, count } = this.props.stock
    return (
      <li className="stock">
        <span className="stock-name">{name}</span>
        <span className="stock-count">{count}</span>
        <button
          className="stock-button stock-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="stock-button stock-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="stock-button stock-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Stock
