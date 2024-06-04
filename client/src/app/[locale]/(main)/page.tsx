import {
  Categories,
  Collection,
  Features,
  Promotions,
  RecommendedDevices,
  ServicesSection,
  ShopTitle,
  SlickSlider
} from '@/components';
import { fetchCategories, fetchCollection, fetchDevices } from '@/services/api';

import './page.scss';

const Home = async () => {
  const categories = await fetchCategories();
  const collection = await fetchCollection();

  //first variant
  // const insertCardCategory = async (category: string) => {
  //   const devices: DevicesProps[] = await fetchDevices(category);
  //   return devices;
  // }

  // const smartphones = await insertCardCategory('smartphones');
  // const laptops = await insertCardCategory('laptops');
  // const gadgets = await insertCardCategory('gadgets');
  // const audio = await insertCardCategory('audio');

  //second variant
  const [smartphones, laptops, gadgets, audio] = await Promise.all([
    fetchDevices('smartphones', 'popularity', 3),
    fetchDevices('laptops', 'popularity', 3),
    fetchDevices('gadgets', 'popularity', 3),
    fetchDevices('audio', 'popularity', 3)
  ]);

  return (
    <main className="main">
      <div className="main--wrapper">
        <ShopTitle />
        <SlickSlider />
        <Categories categories={categories} />
        <Promotions />
        <RecommendedDevices category="smartphones" devices={smartphones} />
        <ServicesSection />
        <RecommendedDevices category="laptops" devices={laptops} />
        <Collection collection={collection} />
        <RecommendedDevices category="gadgets" devices={gadgets} />
        <RecommendedDevices category="audio" devices={audio} />
        <Features />
      </div>
    </main>
  );
};

export default Home;
