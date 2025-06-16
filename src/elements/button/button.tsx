import { classMerge } from "../../helpers";
import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.styles";

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  isDisabled,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classMerge(
        buttonVariants({ variant, size, isDisabled }),
        className
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
