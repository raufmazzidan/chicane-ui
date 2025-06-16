export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "id"
  > {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
}
