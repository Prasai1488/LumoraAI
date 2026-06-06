"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-2">
          <Image
            src="/lumoraLogo.png"
            alt="LumoraAI logo"
            width={320}
            height={96}
            className="h-20 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" render={<a href="#contact" />}>
            Sign in
          </Button>
          <Button
            size="sm"
            className="glow-border bg-primary/90 hover:bg-primary"
            render={<a href="#contact" />}
          >
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-white/5 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full"
                render={
                  <a href="#contact" onClick={() => setMobileOpen(false)} />
                }
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
