import { useTranslations } from 'next-intl';

import './ShopTitle.scss';

interface ShopTitleProps {
  title?: string;
}

export const ShopTitle = ({
  title
}: ShopTitleProps) => {
  const t = useTranslations('General');
  return (
    <div className='shop-title'>
      <h1>
        {title ? title : t('shop_title')}
      </h1>
    </div>
  )
}