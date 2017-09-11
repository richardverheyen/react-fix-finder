import { SET_CAFEID } from './actions'; //import the "actions costant" from our ./actions file

const initialState = ''; //create a variable to hold our initial state, before we change it

export default (state = initialState, action) => {
  switch (action.type) { //compares the actions type with each of the cases
    case SET_CAFEID:
      return action.cafeId;
    default:
      return state;
  }
};
