import React from 'react';
import { connect } from 'react-redux';

class Champion extends React.Component {
  constructor(props) {
    super(props)

    this.champion = this.champion.bind(this);
  }

  champion() {
    const {
      firstFinalist,
      secondFinalist,
      firstFinalistGols,
      secondFinalistGols,
    } = this.props
    if (firstFinalistGols > secondFinalistGols) {
      return firstFinalist
    }
    if (firstFinalistGols < secondFinalistGols) {
      return secondFinalist
    }
  }

  render() {
    const {
      firstFinalistGols,
      secondFinalistGols,
    } = this.props
    return (
      <div className="champios-container">
        <h2>Campeão</h2>
        {(firstFinalistGols && secondFinalistGols) && <h1>{ this.champion() }</h1> }
      </div>
    );
  }
}

const mapStateToProps = ({ FinalistReducer }) => ({
  firstFinalist: FinalistReducer.firstFinalist,
  secondFinalist: FinalistReducer.secondFinalist,
  firstFinalistGols: FinalistReducer.firstFinalistGols,
  secondFinalistGols: FinalistReducer.secondFinalistGols,
})

export default connect(mapStateToProps)(Champion);
