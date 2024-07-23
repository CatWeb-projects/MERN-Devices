import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@chakra-ui/react';
import { useUser } from '@/store/store';
import { DevicesProps } from '@/store/store.interface';
import { Icon } from '../Icon/Icon';
import { checkImageUrl } from '@/helpers';

import './Devices.scss';

interface DeviceItemProps {
  device: DevicesProps;
}

export const DevicesItem = ({ device }: DeviceItemProps) => {
  const locale = useLocale();
  const t = useTranslations('Categories');
  const [userFavorites, addToFavorites, loading, error] = useUser((state) => [
    state.userFavorites,
    state.addToFavorites,
    state.loading,
    state.error
  ]);
  const favoritesData = useMemo(() => userFavorites?.data, [userFavorites?.data]);
  const activeAddToFavorites = favoritesData?.find((favorite) => favorite.id === device.id);

  return (
    <div className="device--item">
      {device && (
        <>
          <Link href={`/${locale}/device/${device.link}`}>
            <Image
              src={checkImageUrl(device?.imageUrl)}
              alt={device?.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </Link>
          <Link href={`/${locale}/device/${device.link}`}>
            <div className="device--title">{device.name}</div>
          </Link>
          <div className="device--price-wrapper options-devices-card-wrapper">
            <div className="device--price">
              {device.credit && (
                <span>
                  {device.credit} {t('credit')}
                </span>
              )}

              <h5>
                {device.price} {t('lei')}
              </h5>

              {device.cashback && (
                <span>
                  Cashback {device.cashback} {t('lei')}
                </span>
              )}
            </div>
            <div className="options-devices">
              <div className="compare-devices">
                <Button
                // onClick={() => addToCompare(product)}
                // className={userCompareFind ? 'added-to-compare' : ''}
                >
                  <Icon type="compare" />
                </Button>
                <div className="options-devices-info compare-info">{t('compare')}</div>
              </div>
              <div className="add-to-favorites">
                <Button
                  onClick={() => addToFavorites(device.id)}
                  id={activeAddToFavorites ? 'added-to-favorites' : ''}
                >
                  <Icon type="heart" />
                </Button>
                <div className="options-devices-info favorites-info">{t('favorites')}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
