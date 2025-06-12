import { Play, SkipBack, SkipForward, Volume1 } from "lucide-react";
import Stage from "./stage";

export function Controls() {
  return (
    <>
      <Stage />
      <div className="bg-bar fixed right-0 bottom-0 left-0 z-10 flex items-center justify-between p-2 px-2">
        <div className="flex min-w-0 flex-1 shrink-0 items-center space-x-3">
          <div className="bg-muted h-12 w-12 rounded-xs" />
          <div className="flex flex-col truncate">
            <span className="truncate text-xs">Song Title</span>
            <span className="text-muted-foreground truncate text-xs">
              Artist Name
            </span>
          </div>
        </div>

        <div className="mx-4 flex max-w-lg flex-1 flex-col items-center gap-0 sm:flex-3">
          <div className="flex items-center gap-5">
            <SkipBack fill="white" size={18} />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <Play fill="black" stroke="none" size={18} />
            </div>
            <SkipForward fill="white" size={18} />
          </div>
          <div className="text-muted-foreground sm hidden w-full items-center gap-4 text-xs sm:flex">
            <span>0:06</span>
            <div className="bg-background-variant h-1 w-full rounded-full" />
            <span>0:30</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 shrink-0 items-center justify-end gap-2">
          <Volume1 />
          <div className="bg-background-variant h-1 w-24 rounded-full" />
        </div>
      </div>
    </>
  );
}
