import React from 'react';
import { connect } from 'react-redux';
import { setGols } from './Actions';

class SemiFinal extends React.Component {
  constructor(props) {
    super(props)

    this.handleGols = this.handleGols.bind(this)
  }

  handleGols({ target }) {
    const {  setGols } = this.props;
    setGols(target.id, target.value)
  }

  render() {
    return (
      <div className="App">
        <div className="firstSemi">
          <label htmlFor="maschesterCity">
            Machester City
            <input type="text" id="maschesterCity" onChange={ this.handleGols }/>
          </label>
          <label htmlFor="PSG">
            PSG
            <input type="text" id="PSG" onChange={ this.handleGols }/>
          </label>
        </div>
        <div className="secondSemi">
          <label htmlFor="realMadrid">
            Real Madrid
            <input type="text" id="realMadrid" onChange={ this.handleGols }/>
          </label>
          <label htmlFor="Chelsea">
            Chelsea
            <input type="text" id="chelsea" onChange={ this.handleGols }/>
          </label>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setGols: (club, gols) => dispatch(setGols(club, gols))
})

export default connect(null, mapDispatchToProps)(SemiFinal);
