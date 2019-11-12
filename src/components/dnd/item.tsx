import React, { useContext } from "react";
import { DnDContext } from "../../context/dnd/dndContext";

export const Item = (props: {
  text: string;
  startDrag: () => void;
  endDrag: () => void;
}) => (
  <div onMouseDown={props.startDrag} onMouseUp={props.endDrag}>
    {props.text}
  </div>
);
