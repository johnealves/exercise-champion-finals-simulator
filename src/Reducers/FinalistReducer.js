const INITIAL_STATE = {
  firstFinalist: '',
  secondFinalist: '',
  firstFinalistGols: null,
  secondFinalistGols: null,
}

const FinalistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case "SET_FIRST_FINALIST":
    return {
      ...state,
      firstFinalist: action.name,
    }
  case "SET_SECOND_FINALIST":
    return {
      ...state,
      secondFinalist: action.name,
    }
  case 'SET_FINALIST_GOLS':
    return {
      ...state,
      [action.id]: action.gols,
    }
  default:
    return state;
  }
}

export default FinalistReducer