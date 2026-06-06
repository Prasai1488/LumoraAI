"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50M+", label: "API calls / day" },
  { value: "2,400+", label: "Enterprise clients" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24 pb-20">
      <div className="mesh-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 px-4 py-1 text-primary"
            >
              <Zap className="mr-1.5 size-3" />
              Now in public beta — v2.0 launch
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Illuminate your business with{" "}
            <span className="text-gradient">intelligent AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            LumoraAI delivers enterprise-grade machine learning infrastructure that
            scales with your ambition — from real-time inference to autonomous agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="glow-border h-12 bg-primary px-8 text-base hover:bg-primary/90"
              render={<a href="#contact" />}
            >
              Start free trial
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/10 bg-white/5 px-8 text-base hover:bg-white/10"
            >
              <Play className="mr-1.5 size-4" />
              Watch demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-white/5 pt-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass glow-border mt-16 overflow-hidden rounded-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <div className="size-3 rounded-full bg-red-500/80" />
            <div className="size-3 rounded-full bg-yellow-500/80" />
            <div className="size-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">lumora-cli</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-muted-foreground">
            <code>
              <span className="text-accent">$</span> lumora deploy --model gpt-neural-v3{"\n"}
              <span className="text-primary">✓</span> Model loaded in 847ms{"\n"}
              <span className="text-primary">✓</span> Inference endpoint: https://api.lumora.ai/v1{"\n"}
              <span className="text-primary">✓</span> Auto-scaling enabled (0 → 1000 instances){"\n"}
              <span className="text-muted-foreground/60">→ Ready to serve 50M requests/day</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
