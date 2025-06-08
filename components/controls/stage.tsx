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
      className="fixed z-11 flex flex-col items-end bottom-16 right-0 md:right-6"
    >
      <CollapsibleTrigger>
        <div className="flex flex-row justify-between bg-background-variant-other p-2 rounded-t-md items-center w-80">
          <div className="text-xs ">
            <span>Staged Songs</span>
            <span className="text-muted-foreground"> • {songs.length}</span>
          </div>
          <ChevronUp
            className={cn(
              "hover:cursor-pointer duration-300 text-muted-foreground",
              open ? "rotate-180" : ""
            )}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-80">
        <div className="bg-background-variant-other px-2">
          <ScrollArea
            className={cn(
              "h-91 overflow-hidden bg-bar flex flex-col rounded-sm mb-2",
              songs.length > 7 ? "pr-2" : ""
            )}
          >
            {songs.length > 0 ? (
              <div>
                {songs.map((song, index) => (
                  <div
                    key={index}
                    className={cn(
                      "pr-4 group flex flex-row gap-2 items-center p-2 hover:bg-background-variant/70"
                    )}
                  >
                    <div className="w-9 h-9 bg-muted rounded-xs hover:cursor-pointer" />
                    <div className="flex flex-col text-xs">
                      <span>{song.title}</span>
                      <span className="text-muted-foreground">
                        {song.artist}
                      </span>
                    </div>
                    <CircleMinus
                      size={16}
                      className="ml-auto group-hover:block hidden text-foreground/60 hover:text-foreground hover:cursor-pointer mr-2"
                      onClick={() => {
                        setSongs((prev) => prev.filter((_, i) => i !== index));
                        // Optionally update count if needed
                      }}
                    />
                    <Checkbox
                      className="group-hover:ml-0 ml-auto hover:cursor-pointer"
                      onCheckedChange={(checked) => {
                        setCount((prev) => prev + (checked ? 1 : -1));
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground m-2">
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
