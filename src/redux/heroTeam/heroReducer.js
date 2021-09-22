import { ADD_HERO } from "./heroTypes";
import { REMOVE_HERO } from "./heroTypes";

const initialState = {
  heroTeam: [],
};
const heroReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case ADD_HERO:
      return {
        heroTeam: state.heroTeam.concat(payload),
      };
    case REMOVE_HERO:
      return {
        heroTeam: state.heroTeam.filter((hero) => hero.id !== payload.id),
      };
    default:
      return state;
  }
};

export default heroReducer;
