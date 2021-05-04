import React from 'react';
import { connect } from 'react-redux';
import { SetFinalistsGols, setFirstFinalist, setSecondFinalist } from './Actions';
import './App.css';

class FinalChampios extends React.Component {
  constructor(props) {
    super(props)

    this.firstFinalist = this.firstFinalist.bind(this);
    this.secondFinalist = this.secondFinalist.bind(this);
    this.handleGols = this.handleGols.bind(this);
  }

  firstFinalist() {
    const { maschesterCity, PSG, setFirstFinalist } = this.props;
    if (maschesterCity > PSG) {
      setFirstFinalist('Manchester City');
      return 'Manchester City';
    }
    if (PSG > maschesterCity) {
      setFirstFinalist('PSG');
      return 'PSG';
    } 
  }

  secondFinalist() {
    const { realMadrid, chelsea, setSecondFinalist } = this.props;
    if (realMadrid > chelsea) {
      setSecondFinalist('Real Madrid');
      return 'Real Madrid';
    } 
    if (chelsea > realMadrid) {
      setSecondFinalist('Chelsea')
      return 'Chelsea';
    } 
  }

  handleGols({ target }) {
    const { SetFinalistsGols } = this.props;
    const { id, value } = target;
    SetFinalistsGols(id, value)
  }

  render() {
    const { maschesterCity, PSG, realMadrid, chelsea } = this.props;
    return (
      <div className="finalGame">
        <div className="firstFinalist">
          <label htmlFor="firstFinalist">
            {(maschesterCity && PSG) ? this.firstFinalist(): 'Primeiro finalista'}
            <input type="text" id="firstFinalistGols" onChange={ this.handleGols } />
          </label>
        </div>
        <span>X</span>
        <div className="secondFinalist">
          <label htmlFor="secondFinalist">
            <input type="text" id="secondFinalistGols" onChange={ this.handleGols } />
            {(realMadrid && chelsea) ? this.secondFinalist(): 'Segundo finalista'}
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ GolsReducer }) => ({
  maschesterCity: GolsReducer.maschesterCity,
  PSG: GolsReducer.PSG,
  realMadrid: GolsReducer.realMadrid,
  chelsea: GolsReducer.chelsea,
})

const mapDispatchToProps = (dispatch) => ({
  setFirstFinalist: (name) => dispatch(setFirstFinalist(name)),
  setSecondFinalist: (name) => dispatch(setSecondFinalist(name)),
  SetFinalistsGols: (id, gols) => dispatch(SetFinalistsGols(id, gols))
})

export default connect(mapStateToProps, mapDispatchToProps)(FinalChampios);
