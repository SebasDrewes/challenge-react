import { combineReducers } from "redux";
import heroReducer from "./heroTeam/heroReducer";
import searchReducer from "./recentSearch/searchReducer";

const rootReducer = combineReducers({
  hero: heroReducer,
  search: searchReducer,
});

export default rootReducer;
