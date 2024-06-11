import { Metadata } from 'next';
import { Devices } from '@/components';
import { fetchDevices } from '@/services/api';

export const metadata: Metadata = {
  title: 'TechnoHeart - Search for Devices',
  description: 'Search for Devices'
};

const DevicesPage = async ({
  params: { link },
  searchParams: { page, q }
}: {
  params: { link: string };
  searchParams: { page: number; q: string };
}) => {
  const devices = await fetchDevices(q, link, 'popularity', 8, page);

  return (
    <div className="devices-page">
      <Devices devices={devices} />
    </div>
  );
};

export default DevicesPage;
