import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="static md:absolute right-2 bg-muted mr-2 hover:cursor-pointer rounded-full">
        <div className="w-10 h-10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>View Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
