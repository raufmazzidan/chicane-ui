import { cva } from "class-variance-authority";
import { classMerge } from "../../helpers";

const buttonVariants = cva(
  "outline-none cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "text-blue-600 hover:bg-blue-50",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      isDisabled: {
        true: "bg-slate-700 border-slate-800 text-slate-900 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      isDisabled: false,
    },
  }
);

export const __debug = true;

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "id"
  > {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
}

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
