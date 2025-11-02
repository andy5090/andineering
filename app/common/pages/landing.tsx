import type { Route } from "../../common/pages/+types/landing";
import CTA from "../components/cta";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Services from "../components/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kagentic Solution" },
    {
      name: "description",
      content:
        "Transform your business with Agentic AI. Move beyond digital transformation to intelligent automation that works for you.",
    },
  ];
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
