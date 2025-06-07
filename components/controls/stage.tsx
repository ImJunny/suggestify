"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/animate-ui/radix/collapsible";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const songs = [
  {
    title: "Mercury",
    artist: "Steve Lacey",
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
  },
];

export default function Stage() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="fixed z-11 flex flex-col items-end bottom-18 right-6"
    >
      <CollapsibleTrigger>
        <div className="flex flex-row justify-between bg-card/60 p-2 rounded-t-md items-center w-80">
          <div className="text-xs ">
            <span>Staged Songs</span>
            <span className="text-muted-foreground"> • 5</span>
          </div>
          <ChevronUp className={cn("duration-300", open ? "rotate-180" : "")} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full">
        <div className="bg-card/60 px-2 pb-2">
          <div className="p-2 bg-background-variant-other flex flex-col space-y-2 mb-2 rounded-sm">
            {songs.map((song, index) => (
              <div key={index} className="flex flex-row gap-2 items-center">
                <div className="w-9 h-9 bg-white rounded-xs" />
                <div className="flex flex-col text-xs">
                  <span>{song.title}</span>
                  <span className="text-muted-foreground">{song.artist}</span>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full">Add 4 songs</Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
