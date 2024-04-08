"use client";

import { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { Categories, Devices } from "@/components";
import { useDevices } from "@/store/store";

const DevicesPage = () => {
  const pathname = usePathname();
  const params = useParams()
  const deviceType = pathname.split('/devices/')[1];

  const [
    devices,
    loading,
    error,
    getDevices
  ] = useDevices((state) => [
    state.devices,
    state.loading,
    state.error,
    state.getDevices
  ]);

  useEffect(() => {
    getDevices(deviceType);
  }, [deviceType]);

  return (
    <div className="devices-page">
      <Categories />
      <Devices devices={devices} />
    </div>
  );
}

export default DevicesPage;