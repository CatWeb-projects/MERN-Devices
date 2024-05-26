import type { Metadata } from 'next'
import { Categories, DeviceInfo } from "@/components";
import { fetchCategories, fetchDevice } from "@/services/api";
import { baseUrl, checkImageUrl } from "@/helpers";


type Props = {
  params: { link: string, locale: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const link = params.link;
  const locale = params.locale;

  // fetch data
  const device = await fetchDevice(link);

  return {
    title: `${device?.name} | TechnoHeart`,
    description: `Fă comandă de ${device?.name} la preț avantajos cu livrare express în Chișinău și Moldova din online magazinul TechnoHeart`,
    openGraph: {
      images: [checkImageUrl(device?.imageUrl)],
      url: `/${baseUrl}/${locale}/device/${device?.link}`
    }
  }
}

const DeviceInfoPage = async ({ params: { link } }: { params: { link: string } }) => {
  const categories = await fetchCategories();
  const device = await fetchDevice(link);

  return (
    <div className="device-info-page">
      <Categories categories={categories} />
      <DeviceInfo device={device} />
    </div>
  )
}

export default DeviceInfoPage;
