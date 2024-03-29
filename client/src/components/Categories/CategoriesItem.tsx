import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { CategoriesData } from "@/store/store.interface";


interface CategoriesItemProps {
  category: CategoriesData;
}

export const CategoriesItem = ({ category }: CategoriesItemProps) => {
  const locale = useLocale();
  const t = useTranslations('Categories');
  return (
    <Link
      className={`categories--card ${category.link.slice(1)}`}
      href={`/${locale}/categories/${category.link}`}
      key={category.id}
      onMouseOver={(e) =>
        (e.currentTarget.style.color = `${category.shadowColor}`)
      }
      onMouseOut={(e) => (e.currentTarget.style.color = ``)}
    >

      <div
        className="categories--img"
        onMouseOver={(e) =>
          (e.currentTarget.style.boxShadow = `0 0 16px 8px ${category.shadowColor}`)
        }
        onMouseOut={(e) => (e.currentTarget.style.boxShadow = `none`)}
      >
        <img src={category?.imgUrl} alt={category.name} />
      </div>

      <div className="categories--title">
        <span>{t(`${category.translate}`)}</span>
      </div>
    </Link>
  )
}