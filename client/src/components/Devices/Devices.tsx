import { DevicesProps } from '@/store/store.interface';
import { DevicesItem } from './DevicesItem';
import { NoData } from '../NoData/NoData';

import './Devices.scss';

interface DevicesDataProps {
  devices: DevicesProps[];
}

export const Devices = ({ devices }: DevicesDataProps) => {
  return (
    <div className="devices">
      {devices?.length > 0 && (
        <div className="devices--items">
          {devices.map((device) => (
            <DevicesItem key={device.id} device={device} />
          ))}
        </div>
      )}

      {!devices?.length && <NoData />}
    </div>
  );
};
