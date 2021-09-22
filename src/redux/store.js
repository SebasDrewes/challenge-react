import { createStore } from 'redux'
import heroReducer from './heroTeam/heroReducer';

const store = createStore(heroReducer);

export default store