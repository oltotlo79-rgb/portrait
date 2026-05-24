import { MinpakuNav } from "./_components/Nav";
import { MinpakuFooter } from "./_components/Footer";
import { MinpakuHero } from "./_components/Hero";
import {
  MinpakuAbout,
  MinpakuRooms,
  MinpakuSeasons,
  MinpakuExperience,
  MinpakuAccess,
  MinpakuCTA,
} from "./_components/Sections";

export default function MinpakuTopPage() {
  return (
    <>
      <MinpakuNav />
      <MinpakuHero />
      <MinpakuAbout />
      <MinpakuRooms />
      <MinpakuSeasons />
      <MinpakuExperience />
      <MinpakuAccess />
      <MinpakuCTA />
      <MinpakuFooter />
    </>
  );
}
