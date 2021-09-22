import { ADD_HERO } from "./heroTypes"

const initialState = {
    heroTeam: []
}
const heroReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_HERO: return {
            ...state,
            heroTeam: state.heroTeam.concat(action.newHero)
        }
        default: return state
    }
}

export default heroReducer