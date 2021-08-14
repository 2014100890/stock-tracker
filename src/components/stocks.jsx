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
  render() {
    return (
      <ul>
        {this.state.stocks.map(stock => (
          <Stock key={stock.id} stock={stock} />
        ))}
      </ul>
    )
  }
}

export default Stocks
