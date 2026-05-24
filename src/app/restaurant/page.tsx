import { RestaurantNav } from "./_components/Nav";
import { RestaurantFooter } from "./_components/Footer";
import { RestaurantHero } from "./_components/Hero";
import { RestaurantIntro } from "./_components/Intro";
import { RestaurantMenu } from "./_components/Menu";
import { RestaurantChef } from "./_components/Chef";
import { RestaurantSpace } from "./_components/Space";
import { RestaurantCTA } from "./_components/CTA";

export default function RestaurantTopPage() {
  return (
    <>
      <RestaurantNav />
      <RestaurantHero />
      <RestaurantIntro />
      <RestaurantMenu />
      <RestaurantChef />
      <RestaurantSpace />
      <RestaurantCTA />
      <RestaurantFooter />
    </>
  );
}
