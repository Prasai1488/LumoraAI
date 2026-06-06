"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Brain, LineChart, MessageSquare, Shield, Workflow } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Neural Inference Engine",
    description:
      "Deploy custom models with sub-second latency. Our distributed GPU cluster handles billions of tokens daily.",
    color: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    description:
      "Build AI agents that reason, plan, and execute multi-step workflows across your entire tech stack.",
    color: "text-accent",
    bg: "bg-accent/10 ring-accent/20",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Fine-tuned LLMs with RAG pipelines, memory, and guardrails for production-grade chat experiences.",
    color: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Turn raw data into actionable forecasts with autoML pipelines and real-time anomaly detection.",
    color: "text-accent",
    bg: "bg-accent/10 ring-accent/20",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Orchestrate complex business processes with intelligent triggers, routing, and human-in-the-loop.",
    color: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, VPC deployment, and granular access controls.",
    color: "text-accent",
    bg: "bg-accent/10 ring-accent/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build with AI
          </h2>
          <p className="mt-4 text-muted-foreground">
            From prototype to production, LumoraAI provides the full stack for intelligent applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="glass group h-full border-white/5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]">
                <CardHeader>
                  <div
                    className={`mb-2 flex size-11 items-center justify-center rounded-xl ring-1 ${service.bg}`}
                  >
                    <service.icon className={`size-5 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
