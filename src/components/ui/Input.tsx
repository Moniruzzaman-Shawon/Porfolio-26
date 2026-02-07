import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full px-[18px] py-3.5 bg-deep border border-border-subtle rounded-[14px]",
          "text-text-primary font-body",
          "focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] focus:outline-none",
          "placeholder:text-text-muted",
          "transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
