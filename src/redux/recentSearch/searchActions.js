import { UPDATE_RECENT_SEARCH } from "./searchTypes";


export const recentSearch = (heroes) => {
  return {
    type: UPDATE_RECENT_SEARCH,
    payload: heroes,
  };
};
