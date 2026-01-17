import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Zap, ChevronRight, Lock, Globe, Cpu } from "lucide-react";
import oceanBg from '@assets/generated_images/abstract_digital_ocean_data_background_for_fintech_app.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={oceanBg} 
            alt="Digital Ocean" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
        </div>

        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">The Coordination Gap is Solved</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6">
                Your Unified <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">Financial Immune System</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Poseidon uses three coordinated AI engines to detect risks, forecast opportunities, and automate execution across your entire financial footprint.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  data-testid="button-launch-platform"
                >
                  Launch Platform
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 text-base rounded-full border-white/10 hover:bg-white/5 hover:text-white transition-all"
                data-testid="button-read-manifesto"
              >
                Read the Manifesto
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Fraud Losses Prevented", value: "$12.5B+", sub: "Industry-wide annual impact" },
              { label: "Est. User Savings", value: "$235", sub: "Per user / year average" },
              { label: "Profit Margin", value: "77%", sub: "Projected at scale" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white">{stat.value}</h3>
                <p className="text-primary font-medium">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engines Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="container px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Three Coordinated Engines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deterministic models compute. GenAI explains. Agents execute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engine 1: Protect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Uses Isolation Forest models for per-user anomaly scoring. Detects fraud that looks "normal" for others but strange for you.
              </p>
              <ul className="space-y-2 text-sm text-cyan-200/60">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-500" />
                  SHAP Explainability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-500" />
                  Real-time Monitoring
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engine 2: Grow</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Forecasts cash flow using Prophet models and provides RAG-based advisory services for portfolio optimization.
              </p>
              <ul className="space-y-2 text-sm text-blue-200/60">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                  Time-series Forecasting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                  Market Intelligence
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engine 3: Optimize</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Autonomous agents that execute fee negotiation, subscription cleanup, and fund movement with human oversight.
              </p>
              <ul className="space-y-2 text-sm text-purple-200/60">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500" />
                  Human-in-the-loop
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500" />
                  Automated Execution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
