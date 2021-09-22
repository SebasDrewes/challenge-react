import { ADD_HERO } from "./heroTypes"
import { REMOVE_HERO } from "./heroTypes"

const initialState = {
    heroTeam: []
}
const heroReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_HERO: return {
            ...state,
            heroTeam: state.heroTeam.concat(action.hero)
        }
        case REMOVE_HERO: return {
            ...state,
            heroTeam: state.heroTeam.filter((hero) => hero.id !== action.hero.id)
        }
        default: return state
    }
}

export default heroReducer