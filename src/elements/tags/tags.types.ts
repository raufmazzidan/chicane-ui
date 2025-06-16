import type { HTMLAttributes } from "react";

export interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  as?: "div" | "span";
}
