import React from 'react'
import { PopupItems } from './PopupItems'
import style from './Popup.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'

interface Props {}

export interface Item {
  icon_id: string
  name: string
  value: string
}

export const Popup = (props: Props) => {
  const items: Item[] = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20 - ощущается как 17',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765мм ртутного столба',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад',
    },
  ]

  return (
    <>
      <div className={style.blur}></div>
      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day_temp}>21°</div>
          <div className={style.day_week}>Суббота</div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.day_time}>Время: 21:00</div>
          <div className={style.day_city}>Москва</div>
        </div>
        <div className={style.items}>
          {items.map((item: Item) => (
            <PopupItems key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={style.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  )
}
