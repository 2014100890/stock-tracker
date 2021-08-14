import React, { Component } from 'react'

class Stock extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.stock)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.stock)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.stock)
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
        <button
          className="stock-button stock-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Stock
