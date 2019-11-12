export type itemPosition = { container: string; row: number };

export type itemPositionDelta = { old: itemPosition; new: itemPosition };

export type dispatch = (props: dndState) => any;

export type dndState = {
  column1: string[];
  column2: string[];
  column3: string[];
};

export type dndFunctions = {
  getItems: () => any;
  // startDrag: (x: itemPosition) => any;
  endDrag: (x: itemPositionDelta) => any;
};

export type dndContext = dndState & dndFunctions;
