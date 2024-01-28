import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
}

export default function Button({
  className,
  variant,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "text-sm font-medium px-4 py-2 rounded",
        {
          "bg-marine-blue text-white hover:bg-marine-blue/90":
            variant === "primary",
          "bg-purplish-blue hover:bg-purplish-blue/90 text-white":
            variant === "secondary",
          "text-cool-gray hover:text-marine-blue": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}
