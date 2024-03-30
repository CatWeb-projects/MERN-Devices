import { Categories, ShopTitle, SlickSlider } from "@/components";

import "./page.scss";

const Home = () => {
  return (
    <main className="main">
      <div className="main--wrapper">
        <ShopTitle />
        <SlickSlider />
        <Categories />
      </div>
    </main>
  );
}

export default Home;
