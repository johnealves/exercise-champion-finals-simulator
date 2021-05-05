import React from 'react';

class SemiFinal extends React.Component {
  constructor(props) {
    super(props)

    this.handleGols = this.handleGols.bind(this)
  }

  handleGols({ target }) {
    
  }

  render() {
    return (
      <div className="App">
        <div className="firstSemi">
          <label htmlFor="maschesterCity">
            Machester City
            <input type="text" name="maschesterCityGols" id="maschesterCity" onChange={ this.handleGols }/>
          </label>
          <label htmlFor="PSG">
            PSG
            <input type="text" name="PSGGols" id="PSG" onChange={ this.handleGols }/>
          </label>
        </div>
        <div className="secondSemi">
          <label htmlFor="realMadrid">
            Real Madrid
            <input type="text" name="realMadridGols" id="realMadrid" onChange={ this.handleGols }/>
          </label>
          <label htmlFor="Chelsea">
            Chelsea
            <input type="text" name="chelseaGols" id="chelsea" onChange={ this.handleGols }/>
          </label>
        </div>
      </div>
    )
  }
}

export default SemiFinal;
