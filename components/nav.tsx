import { Search } from "lucide-react";

export function Nav() {
  return (
    <nav className="bg-bar w-full h-14 flex items-center justify-center fixed top-0 z-50">
      <h1 className="absolute left-4 text-xl font-semibold">Suggestify</h1>
      <div className="absolute h-9 w-xl bg-background-variant rounded-full text-xs text-muted-foreground flex items-center gap-2 px-3">
        <Search size={20} /> Search
      </div>
      <div className="absolute rounded-full right-4 w-10 h-10 bg-muted" />
    </nav>
  );
}
