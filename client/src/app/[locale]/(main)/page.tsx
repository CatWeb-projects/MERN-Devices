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

  const recommendedDevices = (category: string) => {
    return fetchDevices('', category, 'popularity', 3);
  };

  const [smartphones, laptops, gadgets, audio] = await Promise.all([
    recommendedDevices('smartphones'),
    recommendedDevices('laptops'),
    recommendedDevices('gadgets'),
    recommendedDevices('audio')
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
