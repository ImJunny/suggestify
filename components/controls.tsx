import { Play, SkipBack, SkipForward } from "lucide-react";

export function Controls() {
  return (
    <div className="flex items-center bg-bar fixed bottom-0 left-0 right-0 z-10 p-4">
      <div className="w-14 h-14 bg-muted rounded-xs" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
        <div className="flex gap-5 items-center">
          <SkipBack fill="white" size={18} />
          <div className="rounded-full bg-white h-8 w-8 flex items-center justify-center">
            <Play fill="black" stroke="none" size={18} />
          </div>
          <SkipForward fill="white" size={18} />
        </div>

        <div className="flex text-xs items-center gap-4 text-muted-foreground">
          <span>0:06</span>
          <div className="w-md h-1 bg-background-variant rounded-full" />
          <span>0:30</span>
        </div>
      </div>
    </div>
  );
}
