import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div"> & { transparent?: boolean };

function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card/60 text-card-foreground flex flex-col p-3 rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Card };
