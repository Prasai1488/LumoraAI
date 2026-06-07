import Image from "next/image";

const footerLinks = {
  Services: ["Website Development", "AI Chatbots", "Lead Capture", "Automation"],
  Solutions: ["Professional Website", "Growth Package", "AI Automation Package"],
  Company: ["About", "FAQ", "Contact", "Support"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/lumoraLogo.png"
                alt="Lumora AI logo"
                width={140}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Modern websites and AI automation to help Nepal businesses generate more
              leads, respond faster, and grow with confidence.
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
            Copyright {new Date().getFullYear()} Lumora AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Facebook", "Instagram", "LinkedIn"].map((social) => (
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
