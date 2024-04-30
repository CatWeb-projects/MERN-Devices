import { Categories, Promotions, RecommendedDevices, ServicesSection, ShopTitle, SlickSlider } from "@/components";
import { CategoriesData, DevicesData } from "@/store/store.interface";
import { fetchCategories, fetchDevices } from "@/services/api";
import { devicesCards } from "@/constants/devicesCards";
import { DevicesCardProps } from "@/types/devicesCard.type";

import "./page.scss";

const Home = async () => {
  const categories: CategoriesData[] = await fetchCategories();
  const insertCardCategory = async (category: string) => {
    const card: DevicesCardProps = devicesCards.find((devicesCard) => devicesCard?.name?.includes(category));
    const devices: DevicesData[] = await fetchDevices(category);

    return [
      card,
      devices
    ] as [DevicesCardProps, DevicesData[]]
  }

  const [phonesCard, smartphones] = await insertCardCategory('smartphones');
  const [laptopsCard, laptops] = await insertCardCategory('laptops');

  return (
    <main className="main">
      <div className="main--wrapper">
        <ShopTitle />
        <SlickSlider />
        <Categories categories={categories} />
        <Promotions />
        <RecommendedDevices cardData={phonesCard} devices={smartphones} />
        <ServicesSection />
        <RecommendedDevices cardData={laptopsCard} devices={laptops} />
      </div>
    </main>
  );
}

export default Home;
