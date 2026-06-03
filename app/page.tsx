import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedSection } from "@/components/featured-section";
import { ProcessSection } from "@/components/process-section";
import { PopularJobsSection } from "@/components/popular-jobs-section";
import { SuccessRateSection } from "@/components/success-rate-section";
import { CompaniesSection } from "@/components/companies-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <FeaturedSection />
      <ProcessSection />
      <PopularJobsSection />
      <SuccessRateSection />
      <CompaniesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
