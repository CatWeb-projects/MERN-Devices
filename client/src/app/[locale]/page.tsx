import { Categories, ShopTitle, SlickSlider } from "@/components";

import "./page.scss";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Categories');
  return (
    <main className="main">
      <div className="main--wrapper">
        <ShopTitle />
        <SlickSlider />
        <Categories />
      </div>
      <div>
        {t('phones')}
      </div>
    </main>
  );
}
