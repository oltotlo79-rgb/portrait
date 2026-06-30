import { RestaurantNav } from "./_components/Nav";
import { RestaurantFooter } from "./_components/Footer";
import { RestaurantHero } from "./_components/Hero";
import { RestaurantIntro } from "./_components/Intro";
import { RestaurantMenu } from "./_components/Menu";
import { RestaurantChef } from "./_components/Chef";
import { RestaurantSpace } from "./_components/Space";
import { RestaurantNews } from "./_components/News";
import { RestaurantCTA } from "./_components/CTA";
import { getCourses, getInfo, getNews } from "./_data";

export default async function RestaurantTopPage() {
  const [courses, info, news] = await Promise.all([
    getCourses(),
    getInfo(),
    getNews(),
  ]);

  return (
    <>
      <RestaurantNav />
      <RestaurantHero info={info} />
      <RestaurantIntro />
      <RestaurantMenu courses={courses} />
      <RestaurantChef />
      <RestaurantSpace />
      <RestaurantNews news={news} />
      <RestaurantCTA />
      <RestaurantFooter info={info} />
    </>
  );
}
