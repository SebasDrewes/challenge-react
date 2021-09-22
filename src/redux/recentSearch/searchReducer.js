import { UPDATE_RECENT_SEARCH } from "./searchTypes";

const initialState = {
  recentSearch: [],
};
const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_RECENT_SEARCH:
      return {
        recentSearch: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
