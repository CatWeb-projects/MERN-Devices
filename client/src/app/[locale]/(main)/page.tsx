import {
  Categories,
  Collection,
  Features,
  Promotions,
  RecommendedDevices,
  ServicesSection,
  ShopTitle,
  SlickSlider
} from "@/components";
import { CategoriesProps, CollectionProps, DevicesProps } from "@/store/store.interface";
import { fetchCategories, fetchCollection, fetchDevices } from "@/services/api";
import { devicesCards } from "@/constants/devicesCards";
import { DevicesCardProps } from "@/types/devicesCard.type";

import "./page.scss";

const Home = async () => {
  const categories: CategoriesProps[] = await fetchCategories();
  const collection: CollectionProps[] = await fetchCollection();

  const insertCardCategory = async (category: string) => {
    // const card: DevicesCardProps = devicesCards.find((devicesCard) => devicesCard?.name?.includes(category));
    const card: DevicesCardProps = devicesCards[category];
    const devices: DevicesProps[] = await fetchDevices(category);

    return [
      card,
      devices
    ] as [DevicesCardProps, DevicesProps[]]
  }

  const [phonesCard, smartphones] = await insertCardCategory('smartphones');
  const [laptopsCard, laptops] = await insertCardCategory('laptops');
  const [gadgetsCard, gadgets] = await insertCardCategory('gadgets');
  const [audioCard, audio] = await insertCardCategory('audio');

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
        <Collection collection={collection} />
        <RecommendedDevices cardData={gadgetsCard} devices={gadgets} />
        <RecommendedDevices cardData={audioCard} devices={audio} />
        <Features />
      </div>
    </main>
  );
}

export default Home;
