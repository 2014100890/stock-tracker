import React, { PureComponent } from 'react'

class StockAddForm extends PureComponent {
  // DOM element 접근
  inputRef = React.createRef()

  onSubmit = event => {
    // Browser Refresth 방지
    event.preventDefault()
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    this.inputRef.current.value = ''
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Please enter stock name"
        />
        <button className="add-button">Add</button>
      </form>
    )
  }
}

export default StockAddForm
