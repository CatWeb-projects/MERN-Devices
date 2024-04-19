import { DevicesData } from "@/store/store.interface";
import { DevicesItem } from "./DevicesItem";
import { NoData } from "../NoData/NoData";

import './Devices.scss';

interface DevicesProps {
  devices: DevicesData[]
}

export const Devices = ({
  devices
}: DevicesProps) => {
  return (
    <div className="devices">
      {devices?.length > 0 && (
        <div className="devices--items">
          {devices.sort((a, b) => b.popularity - a.popularity).map((device) => (
              <DevicesItem key={device.id} device={device} />
            ))}
        </div>
      )}
    
      {(!devices?.length) && (
        <NoData />
      )}
  </div>
  )
}