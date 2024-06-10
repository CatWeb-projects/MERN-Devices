'use client';

import { useMemo } from 'react';
import { DevicesItem } from './DevicesItem';
import { NoData } from '../NoData/NoData';
import { Pagination } from '../Pagination/Pagination';
import { DevicesDataProps } from '@/store/store.interface';

import './Devices.scss';

interface ComponentDevicesDataProps {
  devices: DevicesDataProps;
}

export const Devices = ({ devices }: ComponentDevicesDataProps) => {
  const devicesData = useMemo(() => devices?.data, [devices?.data]);

  return (
    <div className="devices">
      {devicesData?.length > 0 && (
        <div className="devices--items">
          {devicesData.map((device) => (
            <DevicesItem key={device.id} device={device} />
          ))}
          <div className="devices--pagination">
            <Pagination currentPage={devices.page} totalPages={devices.totalPages} />
          </div>
        </div>
      )}

      {!devicesData?.length && <NoData />}
    </div>
  );
};
