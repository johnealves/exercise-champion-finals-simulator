const INITIAL_STATE = {
  maschesterCityGols: '',
  PSGGols: '',
  realMadridGols: '',
  chelseaGols: ''
}

const GolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case "SET_GOLS":
    return {
      ...state,
      [action.name]: action.gols,
    }
  default:
    return state;
  }
}

export default GolsReducer
