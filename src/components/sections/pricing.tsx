"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Professional Website",
    price: "Custom",
    period: "",
    description: "A strong starting package for businesses that need a modern online presence built to earn trust and generate inquiries.",
    features: [
      "Modern, professional website design",
      "Mobile-friendly page layouts",
      "Clear service and business messaging",
      "Inquiry or contact form setup",
      "Lead-focused call-to-action sections",
      "Basic on-page optimization",
    ],
    highlighted: false,
    cta: "Request a Quote",
  },
  {
    name: "Growth Package",
    price: "Custom",
    period: "",
    description: "Ideal for businesses ready to combine a high-converting website with smarter lead capture and faster customer communication.",
    features: [
      "Everything in the Professional Website package",
      "Lead capture forms and inquiry flows",
      "WhatsApp or chat integration",
      "Automated follow-up message setup",
      "Appointment or inquiry tracking support",
      "Conversion-focused page improvements",
      "Guidance for better customer response flow",
    ],
    highlighted: true,
    cta: "Get a Custom Quote",
  },
  {
    name: "AI Automation Package",
    price: "Custom",
    period: "",
    description: "Best for businesses that want deeper automation to save time, handle inquiries efficiently, and create a smoother customer experience at scale.",
    features: [
      "Everything in the Growth Package",
      "AI chatbot for common customer questions",
      "Automated inquiry routing and responses",
      "Appointment booking workflow support",
      "Business task automation for repetitive work",
      "Ongoing optimization and performance reviews",
      "Priority support for updates and improvements",
    ],
    highlighted: false,
    cta: "Talk to Lumora",
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
            Solutions
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Packages Designed Around Your Business Goals
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose the level of support that fits your business today, then contact Lumora for a custom quote tailored to your needs.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={plan.highlighted ? "pt-4" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={cn(
                  "relative flex h-full flex-col border-white/5",
                  plan.highlighted
                    ? "glass overflow-visible glow-border border-primary/30 shadow-[0_0_60px_rgba(139,92,246,0.12)]"
                    : "glass"
                )}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Best for growing businesses
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
