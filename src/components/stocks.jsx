import React, { PureComponent } from 'react'
import Stock from './stock'
import StockAddForm from './stockAddForm'

class Stocks extends PureComponent {
  handleIncrement = stock => {
    this.props.onIncrement(stock)
  }

  handleDecrement = stock => {
    this.props.onDecrement(stock)
  }

  handleDelete = stock => {
    this.props.onDelete(stock)
  }

  handleAdd = name => {
    this.props.onAdd(name)
  }
  handleReset = () => {
    this.props.onReset()
  }
  render() {
    return (
      <>
        <StockAddForm onAdd={this.handleAdd} />
        <button className="stock-reset" onClick={this.props.onReset}>
          Reset Count
        </button>
        <ul className="stocks">
          {this.props.stocks.map(stock => (
            <Stock
              key={stock.id}
              stock={stock}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Stocks
