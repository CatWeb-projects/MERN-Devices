import { Categories, Devices } from "@/components";
import { fetchDevices } from "@/services/api";

const DevicesPage = async ({ params: { link } }: { params: { link: string }}) => {
  const devices = await fetchDevices(link);
  
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
    </div>
  );
}

export default DevicesPage;