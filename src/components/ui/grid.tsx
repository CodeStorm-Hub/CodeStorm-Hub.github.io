import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8;
  responsive?: boolean;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 4, responsive = true, ...props }, ref) => {
    const getGridCols = () => {
      if (!responsive) {
        return `grid-cols-${cols}`;
      }
      
      // Responsive grid patterns
      if (cols === 1) return 'grid-cols-1';
      if (cols === 2) return 'grid-cols-1 md:grid-cols-2';
      if (cols === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      if (cols === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      if (cols === 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
      if (cols === 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6';
      if (cols === 12) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12';
      
      return `grid-cols-${cols}`;
    };

    const gridClasses = cn(
      "grid",
      getGridCols(),
      `gap-${gap}`,
      className
    );

    return <div className={gridClasses} ref={ref} {...props} />;
  }
);

Grid.displayName = "Grid";

export { Grid };