import { combineReducers } from 'redux';
import GolsReducer from './GolsReducer';
import FinalistReducer from './FinalistReducer'

const rootReducer = combineReducers({ GolsReducer, FinalistReducer })

export default rootReducer;
