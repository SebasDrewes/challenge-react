import { UPDATE_RECENT_SEARCH } from "./searchTypes";

export const updateRecentSearch = (heroes) => {
  return {
    type: UPDATE_RECENT_SEARCH,
    payload: heroes,
  };
};
