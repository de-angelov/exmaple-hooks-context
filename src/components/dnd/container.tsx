import React, { useContext, useEffect, useState } from "react";
import { Item } from "./item";
import { Column } from "./column";
import { DnDContext } from "../../context/dnd/dndContext";

const Columns = () => {
  const [dragged, setDragged] = useState({container: null, row: null} as {container: string; row: number});

  const dndContext = useContext(DnDContext);
  const { column1, column2, column3, getItems, endDrag } = dndContext;

  useEffect(() => {
    getItems();
  }, []);

  //if empty?
  const c1Drag = (row: number) => {
    setDragged({ container: "column1", row });
  };

  const c1DragEnd = (row: number) => {
    endDrag(
      { 
      old: dragged;
      new:{ container: "column1", row } 
    });
  };
  const c2Drag = (row: number) => {
    setDragged({ container: "column2", row });
  };

  const c2DragEnd = (row: number) => {
    endDrag(
      { 
      old: dragged;
      new:{ container: "column2", row } 
    });
  };
  return (
    <>
      <Column
        endDrag={()=>c1DragEnd(column1.length-1)}
      >
        {column1.map((x, i) => (
          <Item 
          text={x} 
          startDrag={() => c1Drag(i)} 
          endDrag={() => c1DragEnd(i)}
          />
        ))}
      </Column>
      <Column
        endDrag={()=>c2DragEnd(column1.length-1)}
      >
        {column1.map((x, i) => (
          <Item 
          text={x} 
          startDrag={() => c2Drag(i)} 
          endDrag={() => c2DragEnd(i)}
          />
        ))}
      </Column>

    </>
  );
};

export { Columns };
