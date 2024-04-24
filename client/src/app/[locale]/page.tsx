import { Categories, ShopTitle, SlickSlider } from "@/components";
import { CategoriesData } from "@/store/store.interface";
import { fetchCategories } from "@/services/api";

import "./page.scss";

const Home = async () => {
  const categories: CategoriesData[] = await fetchCategories();

  return (
    <main className="main">
      <div className="main--wrapper">
        <ShopTitle />
        <SlickSlider />
        <Categories categories={categories} />
      </div>
    </main>
  );
}

export default Home;
