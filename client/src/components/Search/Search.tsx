"use client";

import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Icon } from '../Icon/Icon';
import './Search.scss';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const t = useTranslations('Devices');

  const onSearchChange = (e: { target: { value: string } }) => {
    setSearchValue(e.target.value.toLowerCase());
  };
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

      <Button>
        <Icon type="zoom" />
      </Button>
    </div>
  )
}