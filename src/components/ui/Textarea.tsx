import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full px-[18px] py-3.5 bg-deep border border-border-subtle rounded-[14px]",
          "text-text-primary font-body",
          "focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] focus:outline-none",
          "placeholder:text-text-muted",
          "transition-all duration-300",
          "min-h-[140px] resize-y",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
