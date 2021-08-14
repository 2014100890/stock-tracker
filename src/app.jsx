import React, { Component } from 'react'
import './app.css'
import Navbar from './components/navbar'
import Stocks from './components/stocks'

class App extends Component {
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
    const stocks = this.state.stocks.map(item => {
      if (item.id === stock.id) {
        return { ...stock, count: stock.count + 1 }
      }
      return item
    })
    this.setState({ stocks })
  }

  handleDecrement = stock => {
    const stocks = this.state.stocks.map(item => {
      if (item.id === stock.id) {
        const count = stock.count - 1
        return { ...stock, count: count < 0 ? 0 : count }
      }
      return item
    })
    this.setState({ stocks })
  }

  handleDelete = stock => {
    const stocks = this.state.stocks.filter(item => item.id !== stock.id)
    this.setState({ stocks })
  }

  handleAdd = name => {
    const stocks = [...this.state.stocks, { id: Date.now(), name, count: 0 }]
    this.setState({ stocks })
  }

  handleReset = () => {
    const stocks = this.state.stocks.map(stock => {
      if (stock.count !== 0) {
        return { ...stock, count: 0 }
      }
      return stock
    })
    this.setState({ stocks })
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.stocks.filter(item => item.count > 0).length}
        />
        <Stocks
          stocks={this.state.stocks}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App
