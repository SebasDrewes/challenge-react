import { ADD_HERO } from "./heroTypes";
import { REMOVE_HERO } from "./heroTypes";

export const addHero = (hero) => {
  return {
    type: ADD_HERO,
    payload: hero,
  };
};
export const removeHero = (hero) => {
  return {
    type: REMOVE_HERO,
    payload: hero,
  };
};
