import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { checkImageUrl } from "@/helpers";

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
            <Image
              src={checkImageUrl(item.imgUrl)}
              alt={item.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              loading="lazy"
            />
            <Link href={`/${locale}${item.link}`}>
              <h3>{t(`${item.translate}`)}</h3>
            </Link>
            <Link href={`/${locale}${item.link}`}>{t('details')}</Link>
          </div>
        ))}
    </div>
  );
};
