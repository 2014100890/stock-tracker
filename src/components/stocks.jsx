import React, { Component } from 'react'
import Stock from './stock'

class Stocks extends Component {
  state = {
    stocks: [
      {
        id: 1,
        name: 'Apple',
        count: 0,
      },
      {
        id: 2,
        name: 'Microsoft',
        count: 0,
      },
      {
        id: 3,
        name: 'Tesla',
        count: 0,
      },
    ],
  }

  handleIncrement = stock => {
    const stocks = [...this.state.stocks]
    const index = stocks.indexOf(stock)
    stocks[index].count++
    this.setState({ stocks })
  }

  handleDecrement = stock => {
    const stocks = [...this.state.stocks]
    const index = stocks.indexOf(stock)
    const count = stocks[index].count - 1
    stocks[index].count = count < 0 ? 0 : count
    this.setState({ stocks })
  }

  handleDelete = stock => {
    const stocks = this.state.stocks.filter(item => item.id !== stock.id)
    this.setState({ stocks })
  }

  render() {
    return (
      <ul>
        {this.state.stocks.map(stock => (
          <Stock
            key={stock.id}
            stock={stock}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    )
  }
}

export default Stocks
