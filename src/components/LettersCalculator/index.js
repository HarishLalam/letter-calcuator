import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  updateInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="calculator">
          <h1>Calculate the letters you entered</h1>
          <label htmlFor="searchInput">Enter the phrase</label>
          <input
            className="search-input"
            type="text"
            placeholder="Enter the phrase"
            id="searchInput"
            onChange={this.updateInputPhrase}
          />
          <p className="letters-count">No.of letters: {inputPhrase.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
