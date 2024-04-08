
import { useLocale, useTranslations } from "next-intl";
import { CategoriesData } from "@/store/store.interface";
import { Link } from "@chakra-ui/next-js";
import { baseUrl } from "@/helpers/baseUrl";


interface CategoriesItemProps {
  category: CategoriesData;
}

export const CategoriesItem = ({ category }: CategoriesItemProps) => {
  const locale = useLocale();
  const t = useTranslations('Categories');
  return (
    <Link
      className={`categories--card ${category.link.slice(1)}`}
      href={`/${locale}/devices${category.link}`}
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
        <img src={`${baseUrl}/${category?.imgUrl}`} alt={category.name} />
      </div>

      <div className="categories--title">
        <span>{t(`${category.translate}`)}</span>
      </div>
    </Link>
  )
}