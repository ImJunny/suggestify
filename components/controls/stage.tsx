"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/animate-ui/radix/collapsible";
import { Button } from "../ui/button";
import { ChevronUp, CircleMinus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";

const data: { title: string; artist: string }[] = [
  {
    title: "Mercury",
    artist: "Steve Lacey",
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
  },
  {
    title: "Best Part",
    artist: "Daniel Caesar",
  },
  {
    title: "Get You",
    artist: "Daniel Caesar",
  },
  {
    title: "Japanese Denim",
    artist: "Daniel Caesar",
  },
  {
    title: "First Day of My Life",
    artist: "Bright Eyes",
  },
  {
    title: "Holocene",
    artist: "Bon Iver",
  },
  {
    title: "Young Lion",
    artist: "Vampire Weekend",
  },
  {
    title: "New Slang",
    artist: "The Shins",
  },
  {
    title: "Rivers and Roads",
    artist: "The Head and the Heart",
  },
];

export default function Stage() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState(data);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="fixed right-0 bottom-16 z-11 flex flex-col items-end md:right-2"
    >
      <CollapsibleTrigger>
        <div className="bg-background-variant-other flex w-80 flex-row items-center justify-between rounded-t-md p-2">
          <div className="text-xs">
            <span>Staged Songs</span>
            <span className="text-muted-foreground"> • {songs.length}</span>
          </div>
          <ChevronUp
            className={cn(
              "text-muted-foreground duration-300 hover:cursor-pointer",
              open ? "rotate-180" : "",
            )}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-80">
        <div className="bg-background-variant-other px-2">
          <ScrollArea
            className={cn(
              "bg-bar mb-2 flex h-91 flex-col overflow-hidden rounded-sm",
              songs.length > 7 ? "pr-2" : "",
            )}
          >
            {songs.length > 0 ? (
              <div>
                {songs.map((song, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group hover:bg-background-variant/70 flex flex-row items-center gap-2 p-2 pr-4",
                    )}
                  >
                    <div className="bg-muted h-9 w-9 rounded-xs hover:cursor-pointer" />
                    <div className="flex flex-col text-xs">
                      <span>{song.title}</span>
                      <span className="text-muted-foreground">
                        {song.artist}
                      </span>
                    </div>
                    <CircleMinus
                      size={16}
                      className="text-foreground/60 hover:text-foreground mr-2 ml-auto hidden group-hover:block hover:cursor-pointer"
                      onClick={() => {
                        setSongs((prev) => prev.filter((_, i) => i !== index));
                        // Optionally update count if needed
                      }}
                    />
                    <Checkbox
                      className="ml-auto group-hover:ml-0 hover:cursor-pointer"
                      onCheckedChange={(checked) => {
                        setCount((prev) => prev + (checked ? 1 : -1));
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground m-2 text-xs">
                No songs staged yet. You can stage songs you find and save them
                to your own playlists.
              </p>
            )}
          </ScrollArea>
          <Button className="w-full" disabled={count === 0}>
            Save {count} {count == 1 ? "song" : "songs"}
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
