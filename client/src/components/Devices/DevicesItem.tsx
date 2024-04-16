import Link from "next/link"
import { useTranslations } from "next-intl";
import { Button } from "@chakra-ui/react";
import { DevicesData } from "@/store/store.interface";
import { Icon } from "../Icon/Icon";

import './Devices.scss';

interface DeviceItemProps {
  device: DevicesData
}

export const DevicesItem = ({
  device
}: DeviceItemProps) => {
  const t = useTranslations('Categories');
  return (
    <div className="device--item">
      {device && (
        <>
          <Link
            href=""
          >
            <img src={device.imageUrl} alt={device.name} />
          </Link>
          <Link href="">
            <div className="device--title">{device.name}</div>
          </Link>
          <div className="device--price-wrapper options-devices-card-wrapper">
            <div className="device--price">
              {device.credit && (
                <span>
                  {device.credit} {t('credit')}
                </span>
              )}

              <h5>
                {device.price} {t('lei')}
              </h5>

              {device.cashback && (
                <span>
                  Cashback {device.cashback} {t('lei')}
                </span>
              )}
            </div>
            <div className="options-devices">
              <div className="compare-devices">
                <Button
                  // type="black"
                  // onClick={() => addToCompare(product)}
                  // className={userCompareFind ? 'added-to-compare' : ''}
                >
                  <Icon type="compare" />
                </Button>
                <div className="options-devices-info compare-info">
                  {t('compare')}
                </div>
              </div>
              <div className="add-to-favorites">
                <Button
                  // onClick={() => addFavorites(product)}
                  // type="black"
                  // className={userFavoritesFind ? 'added-to-favorites' : ''}
                >
                  <Icon type="heart" />
                </Button>
                <div className="options-devices-info favorites-info">
                  {t('favorites')}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}