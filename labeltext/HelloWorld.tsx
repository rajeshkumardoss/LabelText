import * as React from "react";
import { Label } from "@fluentui/react";

export interface ILabelTextProps {
  name?: string;
}

// eslint-disable-next-line react/display-name
export const LabelText = React.memo((props: ILabelTextProps) => {
  return <Label>{props.name}</Label>;
});
