import { Categories, DeviceInfo } from "@/components";
import { fetchCategories, fetchDevice } from "@/services/api";
import { CategoriesData, DevicesData } from "@/store/store.interface";

const DeviceInfoPage = async ({ params: { link } }: { params: { link: string }}) => {
  const categories: CategoriesData[] = await fetchCategories();
  const device: DevicesData = await fetchDevice(link);
  
  return (
    <div className="device-info-page">
      <Categories categories={categories} />
      <DeviceInfo device={device} />
    </div>
  )
}

export default DeviceInfoPage;
