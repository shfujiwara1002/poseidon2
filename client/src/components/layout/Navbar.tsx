import { Link, useLocation } from "wouter";
import { Shield, TrendingUp, Zap, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { name: "Protect", path: "/dashboard", icon: Shield },
    { name: "Grow", path: "/dashboard", icon: TrendingUp },
    { name: "Optimize", path: "/dashboard", icon: Zap },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Anchor className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              Poseidon<span className="text-primary">.AI</span>
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                location === item.path ? "text-primary" : "text-muted-foreground"
              )}>
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <a className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 text-sm font-medium transition-all">
              Launch Console
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
