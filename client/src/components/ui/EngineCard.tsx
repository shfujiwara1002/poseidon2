import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface EngineCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "active" | "standby" | "optimizing";
  metrics: { label: string; value: string; change?: string }[];
  colorClass: string;
  delay?: number;
}

export function EngineCard({ title, description, icon: Icon, status, metrics, colorClass, delay = 0 }: EngineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden relative">
        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500", colorClass)} />
        
        <CardHeader className="flex flex-row items-start justify-between pb-2">
          <div className="space-y-1">
            <CardTitle className="text-xl font-display tracking-tight text-white flex items-center gap-2">
              <div className={cn("p-2 rounded-lg bg-white/5", colorClass.replace('bg-', 'text-'))}>
                <Icon className="w-5 h-5" />
              </div>
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/5">
            <div className={cn("w-2 h-2 rounded-full animate-pulse", 
              status === "active" ? "bg-emerald-500" : 
              status === "optimizing" ? "bg-amber-500" : "bg-slate-500"
            )} />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {status}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {metrics.map((metric, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-mono font-medium text-white">{metric.value}</span>
                  {metric.change && (
                    <span className={cn("text-xs mb-1", 
                      metric.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"
                    )}>
                      {metric.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
