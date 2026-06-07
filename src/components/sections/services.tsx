"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Brain, LineChart, MessageSquare, Shield, Workflow } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Website Design & Development",
    description:
      "Get a modern, professional website that builds trust, clearly presents your services, and turns more visitors into real inquiries for your business.",
    color: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Answer customer questions instantly, even outside business hours, so you never miss opportunities and every potential client gets a faster response.",
    color: "text-accent",
    bg: "bg-accent/10 ring-accent/20",
  },
  {
    icon: MessageSquare,
    title: "Lead Capture Systems",
    description:
      "Capture inquiries from your website in a clear, organized way so your team can follow up quickly and convert more interested visitors into customers.",
    color: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: LineChart,
    title: "Business Automation",
    description:
      "Reduce repetitive manual work by automating routine tasks, helping your business save time, improve consistency, and focus more on growth.",
    color: "text-accent",
    bg: "bg-accent/10 ring-accent/20",
  },
  {
    icon: Workflow,
    title: "Appointment & Inquiry Management",
    description:
      "Make it easier for customers to book appointments or send inquiries while keeping your follow-up process smooth, timely, and professionally managed.",
    color: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: Shield,
    title: "Ongoing Support & Optimization",
    description:
      "Keep your website and automation performing at their best with ongoing updates, improvements, and support as your business continues to grow.",
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
            Solutions Built to Help Your Business Grow
          </h2>
          <p className="mt-4 text-muted-foreground">
            From professional websites to smart automation, we help businesses attract more leads, respond faster, and deliver a better customer experience.
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
