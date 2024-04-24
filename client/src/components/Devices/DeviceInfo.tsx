import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { DevicesData } from "@/store/store.interface";
import { PRODUCT_PROPERTY } from "@/constants/devices-specs";
import { checkImageUrl } from "@/helpers";

import './Device.scss';
import { Icon } from "../Icon/Icon";
import { Button } from "@chakra-ui/react";

interface DeviceInfoProps {
  device: DevicesData;
}

export const DeviceInfo = ({ device }: DeviceInfoProps) => {
  const t = useTranslations('Devices');
  const tCategories = useTranslations('Categories');
  const locale = useLocale();
  const findProperties = Object.keys(PRODUCT_PROPERTY).filter((property) => {
    return device[property];
  });

  const redirectDeviceColors = (color: string) => {
    if (device.colors.length === 1) {
      return `/${locale}/device/${device.link}`
    } else if (!device.memoryOptions.length) {
      return `/${locale}/device/${device.link
        .split('-')
        .slice(0, -1)
        .join('-')}-${color}`
    } else {
      return `/${locale}/device/${device.link
        .split('-')
        .slice(0, -3)
        .join('-')}-${device.hardDrive}-gb-${color}`
    }
  }

  const checkDeviceProperties = (property: string) => {
    if (property === 'camera' || property === 'frontCamera') {
      return `${device[property]} mpx`;
    }
    if (property === 'resolution') {
      return `${device[property]} px`;
    }
    if (property === 'memory' || property === 'hardDrive' || property === 'videoCardMemory') {
      return `${device[property]} GB`;
    }
    if (property === 'weight') {
      if (device[property].toString().split('').length >= 4) {
        return `${(device[property] * 0.001).toFixed(1)} ${t('kilogram')}`;
      } else {
        return `${device[property]} ${t('gram')}`;
      }
    }
    if (property === 'supportedWeight') {
      return `${device[property]} ${t('kilogram')}`;
    }
    if (property === 'touchScreen' || property === 'microphone' || property === 'coldAir') {
      if (device[property]) {
        return t('true')
      }
      return t('false')
    }
    if (property === 'chargingTime') {
      return `${device[property]} ${t('hours')}`;
    }
    if (property === 'workingTimeDays') {
      return `${device[property]} ${t('days')}`;
    }
    if (property === 'workingTimeHours') {
      return `${device[property]} ${t('hours')}`;
    }
    if (property === 'batteryCapacity') {
      return `${device[property]} mah`;
    }
    if (property === 'audioFormats' || (property === 'interface' || property === 'memoryCard')) {
      return device[property]?.join(', ');
    }
    if (property === 'maxSpeed' || property === 'electricRange') {
      return `${device[property]} km/h`;
    }
    if (property === 'sensitivity') {
      return `${device[property]} dB`;
    }
    if (property === 'impedance') {
      return `${device[property]} Ω`;
    }
    if (property === 'wheelDiameter' || property === 'frameDiameter') {
      return `${device[property]}"`;
    }
    return device[property];
  }

  return (
    <div className="device-product">
      <div className="device-product__wrapper">
        <div className="device-product__name">
          <h3>{device.name}</h3>
        </div>

        <div className="device-product__info">
          <div className="device-product__info-image">
            <img src={checkImageUrl(device.imageUrl)} alt={device.name} />
          </div>

          <div className="device-product__info-specifications">
            {device.colors.length > 0 && (
              <div className="device-product__options-colors">
                <span>{t('color')}</span>
                <div className="device-product__options-colors-wrapper">
                  {device.colors.map((color, key) => (
                    <Link
                      href={redirectDeviceColors(color)}
                      key={key}
                    >
                      <div
                        className={
                          device.color.toLowerCase().match(color)
                            ? 'device-color is-active'
                            : 'device-color'
                        }
                        style={{
                          backgroundColor: Object.values(color).join('')
                        }}
                      ></div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {device.memoryOptions.length > 0 && (
              <div className="device-product__options-memory">
                <span>{t('memory_mob')}</span>
                <div className="device-product__options-memory-wrapper">
                  {device.memoryOptions.map((memory, key) => (
                    <Link
                      href={
                        device.memoryOptions.length === 1
                          ? `/${locale}/device/${device.link}`
                          : `/${locale}/device/${device.link
                              .split('-')
                              .slice(0, -3)
                              .join(
                                '-'
                              )}-${memory}-gb-${device.color.toLowerCase()}`
                      }
                      key={key}
                    >
                      <div
                        className={
                          memory === device.hardDrive
                            ? 'memory-option is-selected'
                            : 'memory-option'
                        }
                      >
                        {memory} GB
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <ul className="device-product__info-specs">
              {findProperties.map((property, i) => (
                <li key={i}>
                  {t(`${property}`)} : {checkDeviceProperties(property)}
                </li>
              ))}
            </ul>

            <div className="options-devices">
              <div className="compare-devices">
                <Button
                  size="full-width"
                  // onClick={() => addToCompare(deviceData)}
                  // className={userCompareFind ? 'added-to-compare' : ''}
                >
                  <Icon type="compare" />
                  {tCategories('compare')}
                </Button>
              </div>
              <div className="add-to-favorites">
                <Button
                  // onClick={() => addFavorites(deviceData)}
                  // className={userFavoritesFind ? 'added-to-favorites' : ''}
                >
                  <Icon type="heart" />
                  {tCategories('favorites')}
                </Button>
              </div>
            </div>
          </div>

          <div className="device-product__info-buy">
            {device.price && (
              <div className="device-product__info-price">
                {`${device.price} ${tCategories('lei')}`}
              </div>
            )}
            <Link href={`/${locale}/checkout`} className="device-product__buy">
              {tCategories('buy')}
            </Link>
            {device.credit && (
              <div className="device-product__info-credit">{`${
                device.credit
              } ${tCategories('credit')}`}</div>
            )}
            {device.cashback && (
              <div className="device-product__info-cashback">{`Cashback ${
                device.cashback
              } ${tCategories('lei')}`}</div>
            )}
            {device.credit && (
              <Link href={`/${locale}/credit`} className="device-product__credit">
                {tCategories('buy_credit')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
