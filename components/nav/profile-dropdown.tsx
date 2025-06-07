import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
