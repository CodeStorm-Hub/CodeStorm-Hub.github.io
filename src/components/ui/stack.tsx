import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className, 
    direction = "column", 
    gap = 4, 
    align = "stretch",
    justify = "start",
    wrap = false,
    ...props 
  }, ref) => {
    const getAlignClass = () => {
      const alignMap = {
        start: "items-start",
        center: "items-center", 
        end: "items-end",
        stretch: "items-stretch",
      };
      return alignMap[align];
    };

    const getJustifyClass = () => {
      const justifyMap = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end", 
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      };
      return justifyMap[justify];
    };

    const stackClasses = cn(
      "flex",
      direction === "column" ? "flex-col" : "flex-row",
      `gap-${gap}`,
      getAlignClass(),
      getJustifyClass(),
      wrap && "flex-wrap",
      className
    );

    return <div className={stackClasses} ref={ref} {...props} />;
  }
);

Stack.displayName = "Stack";

export { Stack };