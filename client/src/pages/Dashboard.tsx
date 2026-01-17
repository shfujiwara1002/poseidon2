import { Navbar } from "@/components/layout/Navbar";
import { EngineCard } from "@/components/ui/EngineCard";
import { Shield, TrendingUp, Zap, Bell, Activity, ArrowUpRight, DollarSign } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const mockData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 2000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 1890 },
  { name: "Sat", value: 2390 },
  { name: "Sun", value: 3490 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2" data-testid="heading-command-center">Command Center</h1>
            <p className="text-muted-foreground" data-testid="status-system">System Status: <span className="text-emerald-400 font-medium">Fully Operational</span></p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-white/10 hover:bg-white/5"
              data-testid="button-alerts"
            >
              <Bell className="w-4 h-4 mr-2" />
              Alerts (3)
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-generate-report"
            >
              <Activity className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Engine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 h-[500px] md:h-auto">
          <EngineCard
            title="Engine 1: Protect"
            description="Monitoring transaction anomalies across 4 linked accounts. Isolation Forest model active."
            icon={Shield}
            status="active"
            colorClass="bg-cyan-500"
            metrics={[
              { label: "Threat Score", value: "0.02%", change: "-0.5%" },
              { label: "Scanned Txns", value: "1,248", change: "+120" }
            ]}
            delay={0.1}
          />
          <EngineCard
            title="Engine 2: Grow"
            description="Cash flow forecast indicates surplus. Recommendation: Move $2.5k to High Yield Savings."
            icon={TrendingUp}
            status="active"
            colorClass="bg-blue-500"
            metrics={[
              { label: "Forecast Accuracy", value: "98.4%", change: "+0.2%" },
              { label: "Proj. Surplus", value: "$4,200", change: "+$500" }
            ]}
            delay={0.2}
          />
          <EngineCard
            title="Engine 3: Optimize"
            description="Identified 2 unused subscriptions ($34/mo). Waiting for approval to cancel."
            icon={Zap}
            status="optimizing"
            colorClass="bg-purple-500"
            metrics={[
              { label: "Pending Savings", value: "$408/yr", change: "+$34" },
              { label: "Auto-Actions", value: "5", change: "+2" }
            ]}
            delay={0.3}
          />
        </div>

        {/* Main Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-white/5"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Net Worth Projection</h3>
                <p className="text-sm text-muted-foreground">Prophet Model Confidence: High</p>
              </div>
              <select className="bg-black/20 border border-white/10 rounded-lg text-sm px-3 py-1 text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>YTD</option>
              </select>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.3)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.3)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value}`} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-linear-to-br from-primary/20 to-blue-600/10 border border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">ACTION REQUIRED</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Subscription Alert</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You have 2 unused subscriptions costing $34/mo. Engine 3 can cancel these automatically.
              </p>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-authorize-cleanup"
              >
                Authorize Cleanup
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-card/40 border border-white/5">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { title: "Portfolio Rebalancing", time: "2h ago", type: "success" },
                  { title: "Fraud Check: Uber Eats", time: "5h ago", type: "neutral" },
                  { title: "Monthly Report Ready", time: "1d ago", type: "neutral" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-2 h-2 rounded-full", item.type === "success" ? "bg-emerald-500" : "bg-blue-500")} />
                      <span className="text-sm text-white">{item.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
