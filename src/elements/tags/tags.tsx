import { forwardRef } from "react";
import { classMerge } from "../../helpers";
import type { TagsProps } from "./tags.types";

const Tags = forwardRef<HTMLDivElement, TagsProps>(
  ({ label, className, as, ...props }, ref) => {
    const Comp = as || "span";
    return (
      <Comp
        ref={ref}
        className={classMerge(
          "my-auto w-fit rounded bg-zinc-200 px-1 py-0.5 text-sm font-semibold text-zinc-400",
          className
        )}
        {...props}
      >
        {label}
        {props.children}
      </Comp>
    );
  }
);

export default Tags;
