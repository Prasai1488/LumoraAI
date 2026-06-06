"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What models does LumoraAI support?",
    answer:
      "LumoraAI supports all major open-source and proprietary models including GPT-4, Claude, Llama 3, Mistral, and custom fine-tuned models. You can also bring your own weights and deploy them on our infrastructure.",
  },
  {
    question: "How does billing work for API usage?",
    answer:
      "Each plan includes a monthly allocation of API calls. Overage is billed at $0.002 per 1K tokens for standard inference and $0.008 for GPU-accelerated inference. You can set spending limits and receive alerts at 80% and 100% of your budget.",
  },
  {
    question: "Can I deploy LumoraAI in my own VPC?",
    answer:
      "Yes. Enterprise customers can deploy LumoraAI in their AWS, GCP, or Azure VPC with full data residency controls. We also offer on-premise deployment for organizations with strict compliance requirements.",
  },
  {
    question: "What security certifications do you have?",
    answer:
      "LumoraAI is SOC 2 Type II certified, GDPR compliant, and HIPAA-ready. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We conduct regular third-party penetration testing and maintain a public security page.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! The Starter plan includes a 14-day free trial with full access to all features. No credit card required. You can upgrade, downgrade, or cancel at any time from your dashboard.",
  },
  {
    question: "How fast is model inference?",
    answer:
      "Standard inference averages 200–400ms time-to-first-token. GPU-accelerated inference on Pro and Enterprise plans achieves 50–100ms. Our global edge network ensures low latency regardless of your users' location.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about LumoraAI. Can&apos;t find an answer?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Contact us
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl border-white/5 px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
