import { Categories, Devices } from "@/components";
import axios from "axios";
import { baseUrl } from "@/helpers/baseUrl";

const fetchDevices = async (type: string) => {
  try {
    const response = await axios.get(`${baseUrl}/devices`, {
      ...(type ? { params: { type } } : {})
    })
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

const DevicesPage = async ({ params: { link } }: { params: { link: string }}) => {
  const data = await fetchDevices(link);
  
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
      <Devices devices={data} />
    </div>
  );
}

export default DevicesPage;