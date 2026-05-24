import { TravelNav } from "./_components/Nav";
import { TravelFooter } from "./_components/Footer";
import { TravelHero } from "./_components/Hero";
import { TravelDestinations } from "./_components/Destinations";
import { TravelNumbers } from "./_components/Numbers";
import { TravelConcierge } from "./_components/Concierge";
import { TravelVoice } from "./_components/Voice";
import { TravelCTA } from "./_components/CTA";

export default function TravelTopPage() {
  return (
    <>
      <TravelNav />
      <TravelHero />
      <TravelDestinations />
      <TravelNumbers />
      <TravelConcierge />
      <TravelVoice />
      <TravelCTA />
      <TravelFooter />
    </>
  );
}
