import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import style from './ThisDay.module.scss'

interface Props {
  weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={style.this_day}>
      <div className={style.top_block}>
        <div className={style.wrapper}>
          <div className={style.temp}>{Math.round(weather.main.temp)}°</div>
          <div className={style.current_day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={style.bottom_block}>
        <div className={style.time}>Время: 21:00</div>
        <div className={style.city}>{weather.name}</div>
      </div>
    </div>
  )
}
