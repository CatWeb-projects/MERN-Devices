import { Metadata } from "next";
import { Categories, Devices } from "@/components";
import { fetchDevices } from "@/services/api";
import { DevicesData } from "@/store/store.interface";

export const metadata: Metadata = {
  title: "TechnoHeart - Devices",
  description: "Select Category and Devices",
};

const DevicesPage = async ({ params: { link } }: { params: { link: string }}) => {
  const devices: DevicesData[] = await fetchDevices(link);
  
  // const [
  //   devices,
  //   loading,
  //   error,
  //   getDevices
  // ] = useDevices((state) => [
  //   state.devices,
  //   state.loading,
  //   state.error,
  //   state.getDevices
  // ]);

  // useEffect(() => {
  //   getDevices(deviceType);
  // }, [deviceType]);

  return (
    <div className="devices-page">
      <Categories />
      <Devices devices={devices} />
      {devices?.length > 4 && <Categories />}
    </div>
  );
}

export default DevicesPage;