"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mesh-bg absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something brilliant
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ready to transform your business with AI? Our team of solutions engineers
              is standing by to help you architect, deploy, and scale your intelligent
              applications.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Mail className="size-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email us</p>
                  <a
                    href="mailto:hello@lumora.ai"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    hello@lumora.ai
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                  <MapPin className="size-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-sm text-muted-foreground">
                    100 AI Boulevard, San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass glow-border rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30">
                    <Send className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Message sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="Jane"
                        required
                        className="border-white/10 bg-white/5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="border-white/10 bg-white/5"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      className="border-white/10 bg-white/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      className="border-white/10 bg-white/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="border-white/10 bg-white/5 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="glow-border w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Send message
                    <Send className="ml-1.5 size-4" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
