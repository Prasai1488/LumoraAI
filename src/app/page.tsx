import { GlowCursor } from "@/components/effects/glow-cursor";
import { ParticleBackground } from "@/components/effects/particle-background";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <GlowCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
