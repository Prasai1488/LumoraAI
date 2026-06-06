"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for indie developers and small teams exploring AI.",
    features: [
      "100K API calls / month",
      "3 deployed models",
      "Community support",
      "Basic analytics dashboard",
      "Standard inference speed",
    ],
    highlighted: false,
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    description: "For growing teams that need scale, speed, and priority support.",
    features: [
      "5M API calls / month",
      "Unlimited deployed models",
      "Priority email & chat support",
      "Advanced analytics & logging",
      "GPU-accelerated inference",
      "Custom model fine-tuning",
      "99.9% uptime SLA",
    ],
    highlighted: true,
    cta: "Get started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated infrastructure for organizations with mission-critical AI workloads.",
    features: [
      "Unlimited API calls",
      "Dedicated GPU clusters",
      "24/7 dedicated support",
      "VPC & on-premise deployment",
      "Custom SLAs up to 99.99%",
      "SSO & advanced RBAC",
      "Dedicated solutions engineer",
    ],
    highlighted: false,
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={cn(
                  "relative flex h-full flex-col border-white/5",
                  plan.highlighted
                    ? "glass glow-border border-primary/30 shadow-[0_0_60px_rgba(139,92,246,0.12)]"
                    : "glass"
                )}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full",
                      plan.highlighted && "glow-border bg-primary hover:bg-primary/90"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                    render={<a href="#contact" />}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
