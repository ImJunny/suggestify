import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

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
      <Card
        className={cn(
          "flex w-full max-w-3xl flex-row flex-wrap gap-2 border-none",
        )}
      >
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
