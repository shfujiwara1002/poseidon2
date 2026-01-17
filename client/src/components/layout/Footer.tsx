import { Anchor } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Anchor className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">© 2025 Poseidon AI. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
}
