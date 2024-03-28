import Link from "next/link";
import { CategoriesData } from "@/store/store.interface";

interface CategoriesItemProps {
  category: CategoriesData;
}

export const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return (
    <Link
      className={`categories--card ${category.link.slice(1)}`}
      href={`/categories/${category.link}`}
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
        <span>{category.translate}</span>
      </div>
    </Link>
  )
}