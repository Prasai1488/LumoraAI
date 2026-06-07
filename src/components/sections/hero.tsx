"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";

const stats = [
  {
    value: "More Leads",
    label: "Turn more website visitors into real inquiries with clearer messaging, stronger lead capture, and faster follow-up.",
  },
  {
    value: "Time Savings",
    label: "Automate routine communication and repetitive tasks so your team can focus on higher-value work.",
  },
  {
    value: "Better Customer Experience",
    label: "Give customers quicker answers, smoother inquiries, and a more professional experience from the first interaction.",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20">
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
              AI Automation & Web Solutions for Growing Businesses
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Capture More Leads and{" "}
            <span className="text-gradient">Respond Instantly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            We help businesses get more inquiries, reply faster, and save time with
            modern websites and AI-powered automation.
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
              Book a Free Consultation
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/10 bg-white/5 px-8 text-base hover:bg-white/10"
              render={<a href="#services" />}
            >
              <Play className="mr-1.5 size-4" />
              See Our Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid gap-8 border-t border-white/5 pt-12 sm:grid-cols-3"
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
            <span className="ml-2 font-mono text-xs text-muted-foreground">lumora-workflow</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-muted-foreground">
            <code>
              <span className="text-accent">$</span> New inquiry received from website{"\n"}
              <span className="text-primary">[OK]</span> Lead captured instantly{"\n"}
              <span className="text-primary">[OK]</span> Auto-reply sent to customer{"\n"}
              <span className="text-primary">[OK]</span> Team notified for follow-up{"\n"}
              <span className="text-muted-foreground/60">-&gt; Faster responses, better conversion potential</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
