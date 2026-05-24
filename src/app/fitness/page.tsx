import { FitnessNav } from "./_components/Nav";
import { FitnessFooter } from "./_components/Footer";
import { FitnessHero } from "./_components/Hero";
import { ScrollVelocityBanner } from "./_components/ScrollVelocityBanner";
import { Programs } from "./_components/Programs";
import { Trainers } from "./_components/Trainers";
import { Pricing } from "./_components/Pricing";
import { FitnessCTA } from "./_components/CTA";

export default function FitnessTopPage() {
  return (
    <>
      <FitnessNav />
      <FitnessHero />
      <ScrollVelocityBanner />
      <Programs />
      <Trainers />
      <Pricing />
      <FitnessCTA />
      <FitnessFooter />
    </>
  );
}
