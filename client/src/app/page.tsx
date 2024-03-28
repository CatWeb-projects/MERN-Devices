import { Categories, ShopTitle, SlickSlider } from "@/components";

import "./page.scss";

export default function Home() {
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
