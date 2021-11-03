import React from 'react'
import style from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayInfoItems } from './ThisDayInfoItems'
import { Weather } from '../../../../store/types/types'

interface Props {
  weather: Weather
}

export interface Item {
  icon_id: string
  name: string
  value: string
}

export const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.round(weather.main.temp)}° - ощущается как ${Math.round(weather.main.feels_like)}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${weather.main.pressure}мм ртутного столба`,
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
