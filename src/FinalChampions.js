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
    const { maschesterCityGols, PSGGols, setFirstFinalist } = this.props;
    if (maschesterCityGols > PSGGols) {
      setFirstFinalist('Manchester City');
      return 'Manchester City';
    }
    if (PSGGols > maschesterCityGols) {
      setFirstFinalist('PSG');
      return 'PSG';
    } 
  }

  secondFinalist() {
    const { realMadridGols, chelseaGols, setSecondFinalist } = this.props;
    if (realMadridGols > chelseaGols) {
      setSecondFinalist('Real Madrid');
      return 'Real Madrid';
    } 
    if (chelseaGols > realMadridGols) {
      setSecondFinalist('Chelsea')
      return 'Chelsea';
    } 
  }

  handleGols({ target }) {
    const { SetFinalistsGols } = this.props;
    const { name, value } = target;
    SetFinalistsGols(name, value)
  }

  render() {
    const { maschesterCityGols, PSGGols, realMadridGols, chelseaGols } = this.props;
    return (
      <div className="finalGame">
        <div className="firstFinalist">
          <label htmlFor="firstFinalist">
            {(maschesterCityGols && PSGGols) ? this.firstFinalist(): 'Primeiro finalista'}
            <input
              type="text"
              id="firstFinalist"
              name="firstFinalistGols"
              onChange={ this.handleGols }
            />
          </label>
        </div>
        <span>X</span>
        <div className="secondFinalist">
          <label htmlFor="secondFinalist">
            <input
              type="text"
              id="secondFinalist"
              name="secondFinalistGols"
              onChange={ this.handleGols }
            />
            {(realMadridGols && chelseaGols) ? this.secondFinalist(): 'Segundo finalista'}
          </label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setFirstFinalist: (name) => dispatch(setFirstFinalist(name)),
  setSecondFinalist: (name) => dispatch(setSecondFinalist(name)),
  SetFinalistsGols: (name, gols) => dispatch(SetFinalistsGols(name, gols))
})

export default connect(null, mapDispatchToProps)(FinalChampios);
