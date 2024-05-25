import Link from "next/link";
import { useLocale, useTranslations } from "next-intl"
import { DevicesProps } from "@/store/store.interface";
import { DevicesCardProps } from "@/types/devicesCard.type";
import { DevicesItem } from "./DevicesItem";

interface Props {
  cardData: DevicesCardProps;
  devices: DevicesProps[];
}

export const RecommendedDevices = ({ devices, cardData }: Props) => {
  const t = useTranslations('Categories');
  const tDevices = useTranslations('Devices');
  const locale = useLocale();

  return (
    <div className="devices">
      {cardData && (
        <Link href={`/${locale}/devices${cardData.link}`}>
          <div
            className="devices--banner"
            style={{ backgroundImage: `url(${cardData.imgUrl})` }}
          >
            {cardData.name && <h4>{t(`${cardData.name}`)}</h4>}
            {devices && devices.length > 0 && (
              <span>
                {devices.length}+ {tDevices('products')}
              </span>
            )}
          </div>
        </Link>
      )}

      <div className="devices--items recommended-item">
        {devices &&
          devices
            .slice(0, 3)
            .map((device) => <DevicesItem key={device.id} device={device} />)}
      </div>
    </div>
  );
};