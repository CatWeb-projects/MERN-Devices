import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { DevicesData } from "@/store/store.interface";

import './Device.scss';

interface DeviceInfoProps {
  device: DevicesData;
}

export const DeviceInfo = ({ device }: DeviceInfoProps) => {
  const t = useTranslations('Devices');
  const locale = useLocale();

  const redirectDeviceColors = (color: string) => {
    if (device.colors.length === 1) {
      return `/${locale}/device/${device.link}`
    } else if (device.memoryOptions === undefined) {
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

  console.log(Object.values(device), 'device values')
  return (
    <div className="device-product">
      <div className="device-product__wrapper">
        <div className="device-product__name">
          <h3>{device.name}</h3>
        </div>

        <div className="device-product__info">
          <div className="device-product__info-image">
            <img src={device.imageUrl} alt={device.name} />
          </div>

          <div className="device-product__info-specifications">
            {device.colors && (
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

            {device.memoryOptions && (
              <div className="device-product__options-memory">
                <span>{t('memory')}</span>
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
              {device.segment && (
                <li>
                  {t('segment')} : {device.segment}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
