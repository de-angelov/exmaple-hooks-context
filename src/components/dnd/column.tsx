import React, { FunctionComponent } from "react";

export const Column: FunctionComponent<{ endDrag: () => void }> = props => (
  <div onMouseDown={props.endDrag}>{props.children}</div>
);
