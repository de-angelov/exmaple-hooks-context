import React, { useReducer } from "react";
import { DnDContext } from "./dndContext";
import { dndReducer } from "./dndReducer";
import { mockItems } from "./mocks";
import { END_DRAG, GET_ITEMS } from "../actions";
import { itemPositionDelta } from "./dndTypes";

type DndState = (props: any) => any;
const DnDState: DndState = props => {
  const initialState = {
    column1: [],
    column2: [],
    column3: []
  };

  const [state, dispatch] = useReducer(dndReducer, initialState);

  const getItems = () => {
    dispatch({
      type: GET_ITEMS,
      payload: mockItems
    });
  };

  // const startDrag = (props: itemPosition) => {
  //   dispatch({
  //     type: START_DRAG,
  //     payload: props
  //   });
  // };

  const endDrag = (props: itemPositionDelta) => {
    dispatch({
      type: END_DRAG,
      payload: props
    });
  };

  return (
    <DnDContext.Provider
      value={{
        column1: state.column1,
        column2: state.column2,
        column3: state.column3,
        getItems,
        endDrag
      }}
    >
      {props.children}
    </DnDContext.Provider>
  );
};

export default DnDState;
