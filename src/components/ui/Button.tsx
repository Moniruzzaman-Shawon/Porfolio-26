import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon";
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-accent text-void font-display font-bold rounded-full px-9 py-3.5 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,255,136,0.3)] active:translate-y-0",
  ghost:
    "border border-border-subtle text-text-secondary rounded-full px-9 py-3.5 hover:border-accent hover:text-accent",
  icon:
    "w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 cursor-pointer",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
