import { DevicesData } from "@/store/store.interface";
import { DevicesItem } from "./DevicesItem";

import './Devices.scss';

interface DevicesProps {
  devices: DevicesData[]
}

export const Devices = ({
  devices
}: DevicesProps) => {
  return (
    <div className="devices">
    <div className="devices--items">
      {devices &&
        devices
          .sort((a, b) => b.popularity - a.popularity)
          .map((device) => (
            <DevicesItem key={device.id} device={device} />
          ))}
    </div>
  </div>
  )
}