import React from 'react'
import style from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayInfoItems } from './ThisDayInfoItems'

interface Props {}

export interface Item {
  icon_id: string
  name: string
  value: string
}

export const ThisDayInfo = (props: Props) => {
  const items = [
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
    <div className={style.this_day_info}>
      <div className={style.items}>
        {items.map((item: Item) => (
            <ThisDayInfoItems key={item.icon_id} item={item} />
        ))}
      </div>
      <img src={cloud} alt="облачно" className={style.image_cloud} />
    </div>
  )
}
