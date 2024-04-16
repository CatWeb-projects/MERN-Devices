"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Categories, Devices } from "@/components";
import { useDevices } from "@/store/store";

const DevicesPage = () => {
  const { link } = useParams();
  const deviceType = link.toString();

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