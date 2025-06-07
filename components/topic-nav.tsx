import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const tags = [
  {
    name: "Help",
  },
  { name: "Discussion" },
  { name: "Showcase" },
];

export default function TopicNav() {
  return (
    <>
      <Card className={cn("flex flex-row gap-2 border-none max-w-3xl w-full")}>
        <Badge>All</Badge>
        {tags.map((tag, index) => (
          <Badge key={index} className="bg-muted text-foreground">
            {tag.name}
          </Badge>
        ))}
      </Card>
    </>
  );
}
