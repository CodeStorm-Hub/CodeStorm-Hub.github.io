import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
      h2: "text-3xl md:text-4xl font-bold tracking-tight leading-tight",
      h3: "text-2xl md:text-3xl font-semibold tracking-tight leading-tight",
      h4: "text-xl md:text-2xl font-semibold tracking-tight leading-tight",
      h5: "text-lg md:text-xl font-semibold leading-normal",
      h6: "text-base md:text-lg font-semibold leading-normal",
      body: "text-base leading-relaxed",
      lead: "text-lg md:text-xl leading-relaxed text-muted-foreground",
      large: "text-lg font-semibold leading-normal",
      small: "text-sm leading-normal",
      muted: "text-sm text-muted-foreground leading-normal",
      caption: "text-xs text-muted-foreground leading-normal",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(typographyVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      );
    }

    // Default element mapping for semantic HTML
    const elementMap = {
      h1: "h1",
      h2: "h2",
      h3: "h3", 
      h4: "h4",
      h5: "h5",
      h6: "h6",
      body: "p",
      lead: "p",
      large: "div",
      small: "small",
      muted: "p",
      caption: "caption",
    } as const;

    const Element = elementMap[variant || "body"] || "p";
    
    return (
      <Element
        className={cn(typographyVariants({ variant, className }))}
        ref={ref as React.RefObject<HTMLDivElement>}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };