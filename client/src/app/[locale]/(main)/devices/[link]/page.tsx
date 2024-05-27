import { Metadata } from 'next';
import { Categories, Devices } from '@/components';
import { fetchCategories, fetchDevices } from '@/services/api';

export const metadata: Metadata = {
  title: 'TechnoHeart - Devices',
  description: 'Select Category and Devices'
};

const DevicesPage = async ({ params: { link } }: { params: { link: string } }) => {
  const devices = await fetchDevices(link, 'popularity');
  const categories = await fetchCategories();

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
      <Categories categories={categories} />
      <Devices devices={devices} />
      {devices?.length > 4 && <Categories categories={categories} />}
    </div>
  );
};

export default DevicesPage;
