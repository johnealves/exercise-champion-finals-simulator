const INITIAL_STATE = {
  maschesterCity: '',
  PSG: '',
  realMadrid: '',
  chelsea: ''
}

const GolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case "SET_GOLS":
    return {
      ...state,
      [action.club]: action.gols,
    }
  default:
    return state;
  }
}

export default GolsReducer
