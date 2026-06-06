import { Sparkles } from "lucide-react";

const footerLinks = {
  Product: ["Services", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Careers", "Blog", "Press"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Sparkles className="size-3.5 text-primary" />
              </div>
              <span className="font-semibold">
                Lumora<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Illuminating the path to intelligent automation for forward-thinking teams worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-medium">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LumoraAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
