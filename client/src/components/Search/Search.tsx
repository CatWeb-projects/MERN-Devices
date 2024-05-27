'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useDevices } from '@/store/store';
import { Icon } from '../Icon/Icon';
import { Loading } from '../Loading/Loading';
import { ShowErrorMessage } from '../ShowErrorMessage/ShowErrorMessage';
import { checkImageUrl } from '@/helpers';

import './Search.scss';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const t = useTranslations('Devices');
  const locale = useLocale();
  const [foundDevices, searchDevices, loading, error] = useDevices((state) => [
    state.foundDevices,
    state.searchDevices,
    state.loadingFoundDevices,
    state.errorFoundDevices
  ]);

  const onSearchChange = (e: { target: { value: string } }) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchValue) {
        searchDevices(searchValue);
      }
    }, 1000);

    return () => {
      clearInterval(debounce);
    };
  }, [searchValue]);

  return (
    <div className="search">
      <input
        type="text"
        // style={
        //   searchValue && searchDevices?.length > 0
        //     ? { borderRadius: '8px 8px 0 0' }
        //     : {}
        // }
        placeholder={t('search')}
        value={searchValue}
        onChange={onSearchChange}
      />

      <Link href={`/${locale}/search?q=${searchValue}`} onClick={clearSearchValue}>
        <Icon type="zoom" />
      </Link>

      {searchValue && searchValue?.length > 0 && (
        <div className="found-devices">
          <h3>{t('products')}</h3>

          {foundDevices?.length > 0 &&
            foundDevices
              .filter((_, key) => key < 10)
              .map((device, key) => (
                <Link
                  href={`/${locale}/device/${device.link}`}
                  onClick={clearSearchValue}
                  className="found-devices--item"
                  key={key}
                >
                  <Image
                    src={checkImageUrl(device?.imageUrl)}
                    alt={device?.name}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                  <div className="found-devices--product">
                    <div>{device.name}</div>
                    <div>
                      {device.price} {t('lei')}
                    </div>
                  </div>
                </Link>
              ))}

          {loading && <Loading />}

          {error && <ShowErrorMessage errorMessage={error} />}
        </div>
      )}
    </div>
  );
};
