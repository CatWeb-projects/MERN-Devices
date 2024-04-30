import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import './Collection.scss';

interface Props {
  collection: any;
}

export const Collection = ({ collection }: Props) => {
  const t = useTranslations('General');
  const locale = useLocale();

  return (
    <div className="collection">
      {collection &&
        collection.map((item: any) => (
          <div key={item.id} className="collection--card">
            <img src={item.imgUrl} alt={item.name} />
            <Link href={`/${locale}${item.link}`}>
              <h3>{t(`${item.translate}`)}</h3>
            </Link>
            <Link href={`/${locale}${item.link}`}>{t('details')}</Link>
          </div>
        ))}
    </div>
  );
};
