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
    question: "Can you build a website that matches my business and brand?",
    answer:
      "Yes. We create websites that reflect your business, services, and goals while keeping the experience clear and professional for your customers. Our focus is not just design, but helping your website build trust, generate inquiries, and support business growth.",
  },
  {
    question: "How can an AI chatbot help my business?",
    answer:
      "An AI chatbot can answer common questions, guide visitors, and respond even when you are unavailable. This helps reduce missed opportunities, improves response time, and gives potential customers a smoother first experience with your business.",
  },
  {
    question: "Will I actually get more leads from my website?",
    answer:
      "A better website alone does not guarantee results, but a clear message, stronger call to action, and better lead capture can make a big difference. We build with conversion in mind so your website is more likely to turn visitors into inquiries.",
  },
  {
    question: "What kinds of business tasks can you automate?",
    answer:
      "We can help automate tasks like replying to inquiries, collecting leads, handling appointment requests, and organizing customer communication. The goal is to reduce repetitive work, save time, and make your business respond more consistently.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines depend on the scope of work, but most website and automation projects move faster when requirements are clear from the beginning. After learning about your needs, we can give you a realistic timeline and a step-by-step rollout plan.",
  },
  {
    question: "Do you offer fixed prices or custom quotes?",
    answer:
      "We usually provide custom quotes based on your goals, the features you need, and the complexity of the project. This helps ensure you only pay for the right solution instead of being forced into a one-size-fits-all package.",
  },
  {
    question: "Will you support us after the project is launched?",
    answer:
      "Yes. We can continue supporting your website and automation after launch with updates, improvements, troubleshooting, and optimization. Ongoing support helps your system stay effective as your business changes and new opportunities come up.",
  },
  {
    question: "How do we get started with Lumora AI?",
    answer:
      "The best first step is to contact us with your business goals, current challenges, and the kind of results you want. From there, we can recommend the right solution, outline the next steps, and prepare a custom quote for you.",
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
