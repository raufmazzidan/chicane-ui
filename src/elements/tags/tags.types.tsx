import React from "react";

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  as?: "div" | "span";
}
