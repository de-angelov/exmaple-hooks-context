import { GET_ITEMS, END_DRAG, ITEM_ACTION } from "../constants";

type action = {
  type: ITEM_ACTION;
  payload: object;
};

type state = {
  column1: string[];
  column2: string[];
  column3: string[];
};

export const dndReducer = (state: state, action: action) => {
  switch (action.type) {
    case GET_ITEMS:
      return state;
    case END_DRAG:
      //action.payload
      // todo move stuff
      console.log("TODO", action);
      return state;
    case 
  }
};
